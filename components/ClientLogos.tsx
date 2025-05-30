const ClientLogos = () => {
  // Using actual logo images
  const logos = [
    { img: "/brands/logo-8.webp" },
    { img: "/brands/logo-7.png" },
    { img: "/brands/logo-6.jpg" },
    { img: "/brands/logo-5.png" },
    { img: "/brands/logo-3.avif" },
    { img: "/brands/logo-4.svg" },
    { img: "/brands/logo-2.svg" },
    { img: "/brands/logo-1.svg" },
  ];

  return (
    <section className="py-12 bg-[#f9f9f9] overflow-hidden">
      <div className="container">
        <p className="text-center text-sm text-gray-600 uppercase tracking-wide mb-8">
          Trusted by industry leaders and governments worldwide
        </p>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex animate-marquee"
            style={{
              animationDuration: "25s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="h-12 flex-shrink-0 mx-8 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={logo.img}
                  alt={`Client logo ${(index % logos.length) + 1}`}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation-name: marquee;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
