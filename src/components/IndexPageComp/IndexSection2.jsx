import React from 'react';
import { Link } from 'react-router-dom';

const IndexSection2 = () => {
  return (
    <div className="Container">
       <h2 className="text-center">Recent Activity</h2>
       <br />
      <div className="row ml-4">
        <div className="col-sm-3 mb-3">
          <div className="card">
            <img src="https://static1.smartbear.co/smartbearbrand/media/images/blog/what%E2%80%99s-the-best-programming-language-to-learn-first.png?ext=.png" className="card-img-top category-image" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Web Developer Bootcamp</h5>
              <p className="card-text">Learn Web Development Bootcamp in 2023! Build apps, Website, projects using HTML, CSS, JavaScript, Phython, MySql & More!</p>
              <Link to={'/MyLearningPage'} className="btn">Countinue Learning</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div className="card">
            <img src="http://mbs-career.org/wp-content/uploads/2022/05/student-learns-Microsoft-Office.jpg" className="card-img-top category-image" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Microsoft Office</h5>
              <p className="card-text">Learn the essentials of Microsoft Office in this 6-course bundle for Office 365 or Office 2021 users.</p>
              <br />
              <Link to={/Index/} className="">Complete</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div className="card">
            <img src="https://cdn.lynda.com/course/651201/651201-1552420720917-16x9.jpg " className="card-img-top category-image" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Complete C# MasterClass</h5>
              <p className="card-text">Learn C# Programming - WPF, Databases, Linq, Collections, Game Development with Unity. More than just the C# basics!</p>
              <Link to={/Index/} className="">Complete</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexSection2;