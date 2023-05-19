import ApplyButton from "../Button/ApplyButton";

const CoursesCard = () => {
    return (
        <>
            <div className="container mt-4 ">
                <h1 className="text-center" style={{ fontSize: "50px" }}>Courses</h1>
            </div>
            <div className="container my-3 border border-light p-1 bg-card-custom">
                <div className="card mx-auto w-100">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://i.ytimg.com/vi/HE9JioDuXkQ/maxresdefault.jpg" className="card-img img-fuild" style={{objectFit: "contain", height: "300px"}} alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-between h-100">
                                <div>
                                    <h5 className="card-title">Introduction to Business Management</h5>
                                    <p className="card-text">Learn the fundamentals of business management with this comprehensive course, covering topics such as leadership, finance, marketing, and operations. Whether you're an aspiring entrepreneur or looking to advance your career in management, this course is perfect for you.
                                    </p>
                                </div>
                                <br />
                                <small class="text-muted">11 Slot Remaining!</small>
                                <span><strong>$13.99</strong> <s className="text-muted">$99.00</s></span>
                                <div className="d-flex justify-content-end pt-3">
                                    <ApplyButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 border-light p-1 bg-card-custom">
                <div className="card mx-auto" style={{ width: "100%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://www.waldenu.edu/media/5353/seo-2098-bs-leadership-successful-african-395033096-1200x675" className="card-img p-2" style={{ boxSizing: 'border-box' }} alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-between h-100">
                                <div>
                                    <h5 className="card-title">Leadership</h5>
                                    <p className="card-text">In this course, you will learn the key principles of leadership and how to apply them in real-world situations. You will learn how to motivate and inspire your team, how to manage conflicts, and how to make effective decisions. Whether you are an experienced manager or a new team leader, this course will help you develop the skills you need to lead with confidence.</p>
                                </div>
                                <br />
                                <small class="text-muted">30 Slot Remaining!</small>
                                <div className="d-flex justify-content-end pt-3">
                                    <ApplyButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-5">
                <div className="card mx-auto" style={{ width: "100%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="./img/Moon.jpg" className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-between h-100">
                                <div>
                                    <h5 className="card-title">Card Title</h5>
                                    <p className="card-text">Card description goes here.
                                        Lorem ipsum dolor sit amet consectetur adipisici
                                        ng elit. EssNecessitatibus sed laboriosam molestias praesentium fugit?
                                        fewfwefwefkwekef
                                        fefef ef fe e fe fe fe fe
                                    </p>
                                </div>
                                <div className="d-flex justify-content-end pt-3">
                                    <ApplyButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="container my-5">
                <div className="card mx-auto" style={{ width: "100%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="./img/Moon.jpg" className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-between h-100">
                                <div>
                                    <h5 className="card-title">Card Title</h5>
                                    <p className="card-text">Card description goes here.
                                        Lorem ipsum dolor sit amet consectetur adipisici
                                        ng elit. EssNecessitatibus sed laboriosam molestias praesentium fugit?
                                        fewfwefwefkwekef
                                        fefef ef fe e fe fe fe fe
                                    </p>
                                </div>
                                <div className="d-flex justify-content-end pt-3">
                                    <ApplyButton />
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
            {/* </div> */}
        </>
    )
};

export default CoursesCard;
