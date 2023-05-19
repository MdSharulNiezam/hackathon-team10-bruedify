const IndexSection3 = () => {
  return (
    <div className="container">
      <h2 className="text-center my-4">Course News</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <img
              src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?cs=srgb&dl=pexels-pixabay-276452.jpg&fm=jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Web Development Bootcamp Begins in June</h5>
              <p className="card-text">
              Embark on an exciting journey to become a professional web developer with our Web Developer Bootcamp starting this June. This comprehensive program covers everything you need to know to build robust web applications, from front-end development with HTML, CSS, and JavaScript to back-end development with Node.js, databases, and APIs.
              </p>
              <p class="card-text"><small class="text-muted">Posted on February 2 , 2023</small></p>
              {/* <a href="#" className="btn">
                Read More
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <img
              src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">New Course Launch: Web Design Fundamentals</h5>
              <p className="card-text">
              We're excited to announce the launch of our latest course, Web Design Fundamentals. This course covers the basics of web design, including HTML, CSS, and responsive design. Whether you're new to web design or looking to refresh your skills, this course is perfect for you.
              </p>
              <p class="card-text"><small class="text-muted">Posted on June 1, 2023</small></p>
              {/* <a href="#" className="btn">
                Read More
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <img
              src="https://justcreative.com/wp-content/uploads/2022/05/Best-Photoshop-Courses.png.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">New Adobe Photoshop Courses</h5>
              <p className="card-text">
              Learn the latest features and techniques in Adobe Photoshop with our new course designed for beginners and intermediate users. The course covers everything from basic image editing to advanced compositing and retouching.
              </p>
              <p class="card-text"><small class="text-muted">Published on April 10, 2023</small></p>
              {/* <a href="#" className="btn">
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexSection3;
