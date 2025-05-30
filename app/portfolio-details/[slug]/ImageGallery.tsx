"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ImageGallery({
  images,
  projectTitle,
}: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImageIndex === null) return;

    let newIndex =
      direction === "next"
        ? (selectedImageIndex + 1) % images.length
        : (selectedImageIndex - 1 + images.length) % images.length;

    setSelectedImageIndex(newIndex);
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-video overflow-hidden rounded-lg shadow-sm cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`${projectTitle} - Image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-[90%] max-h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 text-white hover:bg-white/20 rounded-full p-2"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Image Button */}
            {images.length > 1 && (
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-60 text-white hover:bg-white/20 rounded-full p-2"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* Next Image Button */}
            {images.length > 1 && (
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-60 text-white hover:bg-white/20 rounded-full p-2"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Selected Image - Modified to reduce size */}
            <img
              src={images[selectedImageIndex]}
              alt={`${projectTitle} - Full Image ${selectedImageIndex + 1}`}
              className="max-w-[80%] max-h-[80%] object-contain mx-auto"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
