"use client";

import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react"; // Import the download icon

interface DownloadButtonProps {
  project: {
    title: string;
    body: any;
    categoryName: string;
    location: string;
    scopeOfWork: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    gallery: Array<{
      asset: {
        url: string;
      };
    }>;
  };
}

export default function DownloadButton({ project }: DownloadButtonProps) {
  const generatePDF = async () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    const imageWidth = contentWidth; // Full width for each image
    const imageHeight = 150; // Height for each image
    let yOffset = margin;

    // Function to add border to each page
    const addPageBorder = () => {
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.rect(
        margin - 5,
        margin - 5,
        pageWidth - margin * 2 + 10,
        pageHeight - margin * 2 + 10
      );
    };

    // Function to add header
    const addHeader = async () => {
      try {
        const logo = await fetch("/capital-logo.png");
        const logoBlob = await logo.blob();
        const logoData = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(logoBlob);
        });

        // Add logo to the right side of header
        doc.addImage(
          logoData,
          "PNG",
          pageWidth - margin - 60,
          margin + 5,
          40,
          15
        );
      } catch (error) {
        console.error("Error adding header:", error);
      }
    };

    // Function to add footer
    const addFooter = async () => {
      try {
        const icon = await fetch("/capital-icon.png");
        const iconBlob = await icon.blob();
        const iconData = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(iconBlob);
        });

        // Add icon to footer with reduced width
        doc.addImage(
          iconData,
          "PNG",
          pageWidth - margin - 20,
          pageHeight - margin - 15,
          10,
          10
        );

        // Add centered page number
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(100);
        const pageText = `Page ${doc.getCurrentPageInfo().pageNumber}`;
        const pageTextWidth = doc.getTextWidth(pageText);
        doc.text(
          pageText,
          (pageWidth - pageTextWidth) / 2,
          pageHeight - margin - 5
        );

        // Add company info
        doc.setFontSize(8);
        doc.text(
          "Capital Engineering Consultancy",
          margin,
          pageHeight - margin - 5
        );
        doc.text("www.capitalengg.com", margin, pageHeight - margin - 2);
      } catch (error) {
        console.error("Error adding footer:", error);
      }
    };

    // Add first page content
    await addHeader();
    addPageBorder();
    yOffset += 30; // Space after header

    // Add project title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor("#1f3a7d");
    const titleLines = doc.splitTextToSize(project.title, contentWidth);
    doc.text(titleLines, margin, yOffset);
    yOffset += titleLines.length * 10 + 15;

    // Add project details
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.setFont("helvetica", "bold");
    doc.text("Project Details", margin, yOffset);
    yOffset += 10;

    doc.setFont("helvetica", "normal");
    const details = [
      { label: "Category", value: project.categoryName },
      { label: "Location", value: project.location },
      { label: "Scope of Work", value: project.scopeOfWork },
    ];

    details.forEach((detail) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${detail.label}:`, margin, yOffset);
      doc.setFont("helvetica", "normal");
      const valueLines = doc.splitTextToSize(detail.value, contentWidth - 40);
      doc.text(valueLines, margin + 40, yOffset);
      yOffset += valueLines.length * 7 + 5;
    });

    yOffset += 10;

    // Add description
    doc.setFont("helvetica", "bold");
    doc.text("Description:", margin, yOffset);
    yOffset += 10;
    doc.setFont("helvetica", "normal");
    const descriptionLines = doc.splitTextToSize(
      project.body[0].children[0].text,
      contentWidth
    );
    doc.text(descriptionLines, margin, yOffset);
    yOffset += descriptionLines.length * 7 + 15;

    // Add main image
    try {
      const mainImg = await fetch(project.mainImage.asset.url);
      const mainImgBlob = await mainImg.blob();
      const mainImgData = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(mainImgBlob);
      });

      if (yOffset + imageHeight > pageHeight - margin - 30) {
        addFooter();
        doc.addPage();
        addPageBorder();
        await addHeader();
        yOffset = margin + 30;
      }

      doc.addImage(
        mainImgData,
        "JPEG",
        margin,
        yOffset,
        imageWidth,
        imageHeight
      );
      yOffset += imageHeight + 15;
    } catch (error) {
      console.error("Error adding main image:", error);
    }

    // Add gallery images
    for (let i = 0; i < project.gallery.length; i++) {
      try {
        const img = await fetch(project.gallery[i].asset.url);
        const imgBlob = await img.blob();
        const imgData = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(imgBlob);
        });

        // Check if we need a new page
        if (yOffset + imageHeight > pageHeight - margin - 30) {
          addFooter();
          doc.addPage();
          addPageBorder();
          await addHeader();
          yOffset = margin + 30;
        }

        // Add image
        doc.addImage(imgData, "JPEG", margin, yOffset, imageWidth, imageHeight);
        yOffset += imageHeight + 15;
      } catch (error) {
        console.error("Error adding gallery image:", error);
      }
    }

    // Add footer to last page
    addFooter();
    doc.save(`${project.title.replace(/\s+/g, "_")}_Details.pdf`);
  };

  return (
    <Button
      variant="ghost"
      className="mb-8 flex items-center gap-2 px-4 py-2 rounded-lg text-white"
      style={{ backgroundColor: "#1f3a7d" }}
      onClick={generatePDF}
    >
      <Download className="w-5 h-5" />
      Download Project Details
    </Button>
  );
}
