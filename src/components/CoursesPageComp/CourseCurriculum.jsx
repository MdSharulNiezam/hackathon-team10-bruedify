const CourseCurriculum = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Course Curriculum</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-header bg-dark text-white">
              <h3>Week 1</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">Introduction to Programming</h4>
              <p className="card-text">Learn the fundamentals of programming and software development.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-header bg-dark text-white">
              <h3>Week 2</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">Object-Oriented Programming</h4>
              <p className="card-text">Learn about classes, objects, and how to use them in your programs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-header bg-dark text-white">
              <h3>Week 3</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">Web Development</h4>
              <p className="card-text">Learn how to build dynamic and responsive web applications using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;
