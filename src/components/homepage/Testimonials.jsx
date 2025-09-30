export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & Mike",
      location: "Paris, France",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Sophie captured our engagement in Paris beautifully. The photos exceeded our expectations!",
    },
    {
      name: "Jessica Adams",
      location: "New York, USA",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Marcus made our wedding video look like a Hollywood movie. Absolutely incredible work!",
    },
    {
      name: "David Thompson",
      location: "London, UK",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      text: "Emma showed us London through a photographer's eyes. An unforgettable experience!",
    },
  ];

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="transition-all duration-700 translate-y-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Travelers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from adventurers who captured their perfect moments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="transition-all duration-700 translate-y-8"
            >
              <div className="bg-slate-700 rounded-2xl p-8 motion-preset-bounce-sm hover:bg-slate-600 transition-colors">
                <div className="flex items-center mb-6">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-gray-300 text-sm">{t.location}</div>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
