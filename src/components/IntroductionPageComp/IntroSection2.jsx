const IntroSection2 = () => {
    return (

        <div className="jumbotron jombotron-fluid bg-dark">
            <div className="jumbotron-background">
                <img src="https://www.advance-he.ac.uk/sites/default/files/styles/full_width_image/public/2021-10/3.png?itok=JCYhBGow"   className="blur-1 " />
            </div>
            <div className="container text-white">
                <h1 className="display-4 text-center">What we do</h1>
                <br />
                <p className="lead text-center">Our mission is to ensure access to quality education and decrease unemployment through innovative programs and partnerships.</p>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-4">
                        <h2>Quality Education</h2>
                        <p>Our programs are designed to provide access to quality education, regardless of background or socioeconomic status.</p>
                    </div>
                    <div className="col-md-4">
                        <h2>Job Training</h2>
                        <p>We partner with businesses to provide job and intership training and skill development to ensure our graduates are competitive in the job market.</p>
                    </div>
                    <div className="col-md-4">
                        <h2>Career Services</h2>
                        <p>Our career services team provides ongoing support to ensure our graduates find meaningful employment and achieve their career goals.</p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default IntroSection2;
