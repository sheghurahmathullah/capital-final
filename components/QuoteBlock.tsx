
const QuoteBlock = () => {
  return (
    <section className="section bg-[#f9f9f9]">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="aspect-square max-w-sm mx-auto md:ml-0 bg-gray-200 rounded-full overflow-hidden">
              {/* This would be replaced with a real image */}
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(100%)",
                }}
              ></div>
            </div>
          </div>
          <div className="md:col-span-3">
            <blockquote className="text-2xl md:text-3xl font-medium mb-6">
              "We engineer not just structures — but the future of nations."
            </blockquote>
            <div className="font-medium">
              <span>CEO, Capital Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBlock;
