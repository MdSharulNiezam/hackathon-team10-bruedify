import ApplyButton from "./Button/ApplyButton";

const JobList = () => {
    
    return (
        <>
        <div className="container mt-4">
            <h1 style={{fontSize: "50px"}}>Job</h1>
        </div>
            <div className="container my-5 border border-light p-1" style={{backgroundColor: "#f9dc5c"}}>
                <div className="card mx-auto w-100">
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img src="data:image/png;base64,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" className="img-fuild" alt="..." style={{width: "200px"}} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div>
                                    <h4 className="card-title">BIBD</h4>
                                    <h6 className="card-text">Admin</h6>
                                    <p><i>Salary: $800</i></p>
                                    <p style={{maxWidth: "85%"}}>Responsible for ensuring the organisation of an office’s day-to-day functions, and play a crucial role in the efficient running of company operations.</p>
                                </div>
                                <div className="d-flex justify-content-end pt-2">
                                    <ApplyButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 border border-light p-1" style={{backgroundColor: "#f9dc5c"}}>
                <div className="card mx-auto" style={{ width: "100%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img src="data:image/png;base64,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" className="card-img" alt="..."
                            style={{width: "200px", height: "200px"}} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div>
                                    <h4 className="card-title">UNN</h4>
                                    <h6 className="card-text">Finance Admin</h6>
                                    <p><i>Salary: $800</i></p>
                                    <p style={{maxWidth: "85%"}}>Facilitating and improving the financial practices and procedures within
                                         a company or organisation. Ensuring an employer's adherence to financial
                                          regulations and legislation.</p>
                                </div>
                            <div className="d-flex justify-content-end pt-2">
                                <ApplyButton />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 border border-light p-1" style={{backgroundColor: "#f9dc5c"}}>
                <div className="card mx-auto" style={{ width: "100%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img src="./img/Moon.jpg" className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                 <div>
                                    <h4 className="card-title">UNN</h4>
                                    <h6 className="card-text">Finance Admin</h6>
                                    <p><i>Salary: $800</i></p>
                                    <p style={{maxWidth: "85%"}}>Facilitating and improving the financial practices and procedures within
                                         a company or organisation. Ensuring an employer's adherence to financial
                                          regulations and legislation.</p>
                                </div>
                            <div className="d-flex justify-content-end pt-2">
                                <ApplyButton />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 border border-light p-1" style={{backgroundColor: "#f9dc5c"}}>
                <div className="card mx-auto" style={{ width: "100%" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img src="./img/Moon.jpg" className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div>
                                    <h4 className="card-title">UNN</h4>
                                    <h6 className="card-text">Finance Admin</h6>
                                    <p><i>Salary: $800</i></p>
                                    <p style={{maxWidth: "85%"}}>Facilitating and improving the financial practices and procedures within
                                         a company or organisation. Ensuring an employer's adherence to financial
                                          regulations and legislation.</p>
                                </div>
                            <div className="d-flex justify-content-end pt-2">
                                <ApplyButton />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobList;