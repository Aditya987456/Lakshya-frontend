export const CourseCategories = () => {
    const courses = [
      {
        title: "JEE (Main + Advanced)",
        image: imgJee,
      },
      {
        title: "NEET",
        image: imgNeet,
      },
      {
        title: "Class 6–10",
        image: imgClass,
      },
      {
        title: "Extra Courses",
        image: imgExtra,
      },
    ];
  
    return (
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Explore Course Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition flex flex-col items-center text-center"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-32 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-800">{course.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  