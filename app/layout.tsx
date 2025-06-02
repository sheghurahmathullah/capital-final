import "./index.css";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import localFont from "next/font/local";

// Define the local font
const camber = localFont({
  src: [
    {
      path: "../public/fonts/CamberTRIAL-Lt.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--body-font",
});

// Clarity and Google Analytics configuration
const CLARITY_PROJECT_ID = "r1cf47fa1v";
const GA_MEASUREMENT_ID = "G-20VSFM6VQN";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {/* Microsoft Clarity Script */}
        <Script id="microsoft-clarity" type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
      </head>
      <body className={`body ${camber.variable}`}>
        <main>{children}</main>

        <ScrollToTop />
      </body>
    </html>
  );
}

// Metadata configuration
export const metadata = {
  scrollRestoration: "manual",
  // Add other metadata as needed
};

// Dynamically import Bootstrap if needed
