
const StatsSection = () => {
  const stats = [
    { number: "7,200+", label: "Projects Delivered" },
    { number: "192+", label: "Clients Worldwide" },
    { number: "17+", label: "Years of Legacy" },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-gray-600">
          <p>Global Presence in UAE, UK, Oman, India, Saudi Arabia</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
