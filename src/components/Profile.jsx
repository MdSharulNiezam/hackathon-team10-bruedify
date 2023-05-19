const Profile = () => {
    return (
        <>
            <div className="container">
                <h2 id="details" className="pl-2">Details</h2>
            </div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div class="form-group row py-2">
                            <label for="full-name" class="col-sm-2 col-form-label">Full Name:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="full-name" name="full-name" placeholder="Enter your full name" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="full-name" class="col-sm-2 col-form-label">IC No:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="full-name" name="full-name" placeholder="Enter your IC No" />
                            </div>
                            <label for="ic-color" class="col-sm-2 col-form-label">IC Color:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="ic-color" name="ic-color" placeholder="Enter your IC color" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="gender" class="col-sm-2 col-form-label">Gender:</label>
                            <div class="col-sm-4">
                                <select class="custom-select form-control" id="gender">
                                    <option selected disabled value="">Choose...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <label for="d-o-b" class="col-sm-2 col-form-label">Date of Birth:</label>
                            <div class="col-sm-4">
                                <input type="date" class="form-control" id="d-o-b" name="d-o-b" placeholder="Enter your date of birth" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="martial-status" class="col-sm-2 col-form-label">Martial Status:</label>
                            <div class="col-sm-4">
                                <select class="custom-select form-control" id="martial-status">
                                    <option selected disabled value="">Choose...</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorce">Divorce</option>
                                    <option value="widow">Widow</option>
                                </select>
                            </div>
                            <label for="religion" class="col-sm-2 col-form-label">Religion:</label>
                            <div class="col-sm-4">
                                <select class="custom-select form-control" id="religion">
                                    <option selected disabled value="">Choose...</option>
                                    <option value="muslim">Muslim</option>
                                    <option value="christian">Christian</option>
                                    <option value="hindu">Hindu</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="race" class="col-sm-2 col-form-label">Race:</label>
                            <div class="col-sm-4">
                                <select class="custom-select form-control" id="race">
                                    <option selected disabled value="">Choose...</option>
                                    <option value="malay">Malay</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <hr style={{ width: "97%" }} />
                        <div class="form-group row py-2">
                            <label for="address" class="col-sm-2 col-form-label">Address:</label>
                            <div class="col-sm-10">
                                <input type="textarea" class="form-control" id="address" name="address" placeholder="Enter your address" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="district" class="col-sm-2 col-form-label">District:</label>
                            <div class="col-sm-4">
                                <select class="custom-select form-control" id="district">
                                    <option selected disabled value="">Choose...</option>
                                    <option value="brunei-muara">Brunei & Muara</option>
                                    <option value="tutong">Tutong</option>
                                    <option value="Belait">Belait</option>
                                    <option value="Temburong">Temburong</option>
                                </select>
                            </div>
                            <label for="postal-code" class="col-sm-2 col-form-label">Postal Code:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="postal-code" name="postal-code" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="mobile-no" class="col-sm-2 col-form-label">Mobile No:</label>
                            <div class="col-sm-4">
                                <input type="tel" class="form-control" id="mobile-no" name="mobile-no" />
                            </div>
                            <label for="email" class="col-sm-2 col-form-label">Email:</label>
                            <div class="col-sm-4">
                                <input type="email" class="form-control" id="email" name="email" />
                            </div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn save-btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <h2 id="education" className="pl-2">Education</h2>
            </div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div class="form-group row py-2">
                            <label for="education-level" class="col-sm-3 col-form-label">Education Level:</label>
                            <div class="col-sm-9">
                                <select class="custom-select form-control" id="education-level">
                                    <option selected disabled value="">Choose...</option>
                                    <option value="doctoral">Doctoral Degree</option>
                                    <option value="master">Master Degree</option>
                                    <option value="bachelor-degree">Bachelor Degree</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="course-name" class="col-sm-3 col-form-label">Course Name:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="course-name" name="course-name" placeholder="Enter your Course name" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="institute" class="col-sm-3 col-form-label">Institute:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="institute" name="institute" placeholder="Enter your Institute of study" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="graduate" class="col-sm-3 col-form-label">Graduate Date:</label>
                            <div class="col-sm-9">
                                <input type="date" class="form-control" id="graduate" name="graduate" />
                            </div>
                        </div>
                        <div class="form-group row py-2">
                            <label for="result" class="col-sm-3 col-form-label">Result:</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="result" name="result" placeholder="Enter your result" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn save-btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            

            <hr />

            <div className="container mt-3">
                <h2 id="document" className="pl-2">Document</h2>
            </div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="container">
                            <h6>Identification Card</h6>
                            <p>(Jpg, Jpeg, Png, Pdf. File Size Should Not Exceed 6 MB)</p>
                            <label class="btn upload-btn">
                                <input type="file" style={{display: "none"}} />
                                Upload File
                            </label>
                            <h6 className="mt-4">Certificates</h6>
                            <p>(Jpg, Jpeg, Png, Pdf. File Size Should Not Exceed 6 MB)</p>
                            <label class="btn upload-btn">
                                <input type="file" style={{display: "none"}} />
                                Upload File
                            </label>
                            <h6>Additional Field</h6>
                            <p>(Jpg, Jpeg, Png, Pdf. File Size Should Not Exceed 6 MB)</p>
                            <label class="btn upload-btn">
                                <input type="file" style={{display: "none"}} />
                                Upload File
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Profile;