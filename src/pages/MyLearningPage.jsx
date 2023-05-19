import TimeTable from "../components/TimeTable";
import IndexFooter from "../components/IndexPageComp/IndexFooter";
import IndexNav from "../components/IndexPageComp/IndexNav";



const MyLearningPage = () => {
    return (
        <>
            <IndexNav />
            <div className="container mt-5">
                <h1>My Learning</h1>
                <div className="card mx-auto" style={{ width: "100%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://static1.smartbear.co/smartbearbrand/media/images/blog/what%E2%80%99s-the-best-programming-language-to-learn-first.png?ext=.png" className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-between h-100">
                                <div>
                                    <h5 className="card-title">Web Developer Bootcamp</h5>
                                    <p className="card-text">Learn Web Development Bootcamp in 2023! Build apps, Website, projects using HTML, CSS, JavaScript, Phython, MySql & More!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <hr className="w-80" />
            </div>
            <div className="container my-5">
                <h1 className="text-center mb-5">Course Curriculum</h1>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-header text-black" style={{background: "#f9dc5c"}}>
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
                            <div className="card-header text-black" style={{background: "#f9dc5c"}}>
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
                            <div className="card-header text-black" style={{background: "#f9dc5c"}}>
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
            <div className="container">
                <h1>Time Table</h1>
            </div>
            <TimeTable />
            <IndexFooter />
        </>
    );
};

export default MyLearningPage;