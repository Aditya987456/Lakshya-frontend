 export const WhyChooseUs = () => {
    const features = [
      {
        title: "Expert Faculty",
        desc: "Learn from top Engineers, doctors, and top educators.",
      },
      {
        title: "Live + Recorded Lectures",
        desc: "Flexible learning schedule with full access to recordings.",
      },
      {
        title: "Doubt Support",
        desc: "Get doubts cleared instantly via chat or live sessions.",
      },
      {
        title: "Affordable Pricing",
        desc: "Best-in-class courses at student-friendly prices.",
      },
      {
        title: "Tailored Batches",
        desc: "Courses for JEE, NEET, Olympiads, and school students.",
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-800">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  