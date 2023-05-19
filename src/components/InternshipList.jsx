import ApplyButton from "./Button/ApplyButton";

const InternshipList = () => {
    
    return (
        <>
        <div className="container mt-4">
            <h1 style={{fontSize: "50px"}}>Internship</h1>
        </div>
            <div className="container my-5 border border-light p-1" style={{backgroundColor: "#f9dc5c"}}>
                <div className="card mx-auto w-100">
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img className="img-fluid" src="https://media.licdn.com/dms/image/C510BAQFN0N5cUo6pag/company-logo_200_200/0/1575447473734?e=2147483647&v=beta&t=uwe6Cl7q5GX3nFDBYCd9y7KCNAQXllmLU4HGA4w5oyU" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div>
                                    <h4 className="card-title">UNN</h4>
                                    <h6 className="card-text">Finance Admin</h6>
                                    <p style={{maxWidth: "85%"}}>Facilitating and improving the financial practices and procedures within
                                         a company or organisation. Ensuring an employer's adherence to financial
                                          regulations and legislation.</p>
                                </div>
                                <div className="d-flex justify-content-end pt-3">
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
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAB9CAMAAAAvBq6hAAAA
                            2FBMVEX///84A5M7A5w6A5c6A5hZM5h9a5yQgKpPMZDBvcc8CpLg3+H8/Pw8A574+Pjt7e7p6OqHdabq
                            6uvy8vPHw83RztXY1ts/C5k+A6K8t8XS0NZWL5p0apNgP5rk4+VIGpj18/qxqb2lm7VvVJ2flLEsAI2yq
                            72ThquJeKVbOJdhRJNqTppQKJVNI5VNIZqxqr11XZ5+aaKckLCAa6N3YJ9kRJtvVpqCeZ+zsrtGFpm/ts+
                            sm8igicedgsu1qMvHwNJrWpU9GItcRZGdma1KMIlSOozj3PDm4u671Wn8AAAOM0lEQVR4nO1daWPiRhKVq
                            ltmQRcYoQMtMAjCYQ5jDCTaJJvMJrv5//9ou3W2bmYCxjZ6X2YsZKn1qK5+dbTMcTVq1KhRo0aNGjVq1Lg
                            jSMqtR/CB8ONPtx7Bx4FlOrcewoeB7sq7W4/ho0ARMN8Sbz2KD4Id8Dwcbj2Kj4E94YrnsXXrcXwENDHli
                            kfb4a1H8v4xHCGPLB4GtdaqgDIAPgAcpFuP5p3jJeKK5+XxrUfzvuEwXPFG79bDedfQDRRzRdTDrqarENI
                            SM4aF9L5pq7ce07vFnp2E+ImoU1jdekzvFUOXmYQ8WI8txMuLW4/qneKBNSy0keb0Z6jzD3kQWwnD6nA29
                            WDI0G49sPcIy0yQ1ev73h7XcU8eHAMzs5BbQB33FGE453rrONZ54YSQutx0jao5jqQ7ln6XTDbNJ7W7Ctm
                            C2aMRT8l96ty2sxphU+BOJjbWu/H9zVMHYNPjFth3XMbjjFkbk8mtYWcE5DQYd+mSgADcyfjOxCtRpNhwu
                            JnrrYHrhJBArh6f6IwAece6jhx8jGH7qt1TjoL6cwSvnG6T/+AVd2RDH2x3g9PUCfi2BztuwCwIgIW5Xnq
                            DzwRPgpKlr62cgIcFt2GFBA8r33BEO/Jqmpg4g/BlHJ32jZ/ijRBkZ2Db5ObYdLqtJBV+KlDchMZEtEUD+
                            BQwjCbWPUxHC0IHtOcsd5YyG2pbOqfa0cQjtrdOn0J/+T58lx5KBUR0lS5qOE0Ebp1YJyVqGcMiTv9Oak
                            JKbCggiJwGGbtBOOYKL7lDliy4E64S6Xfs6tLUyM6yGPJUGWU+h/lVBqbo//r5l19//fWXn//9m96tPv8
                            t0GQmHm4qnLbNmk5kZC31Wc5w9VR6/ZMtJLF8mjzsrYo+Aemn37/+wODrf+b9+FP9H2fgzy9/n5zMsGLv
                            TXRBb6W0j4Vs4Qn3lHZqyC1/bhtQChgD4JbwahWby9iGpD8gAhgtp2HA0MtcMwuMvlyOpAhMaQfGbbB1rp
                            N1XMHnVttbD8IBecfSEWQKQsG1SLy06eTr2eEKMusM/apgO/f57eV9nMYPXy5MFIXCCIOGtAVjnMjasM+3
                            leYmsQrUcjfr9dZtke/bHFRohiKyPL6MQ45Z9jZFpo3A9vTc7cjirCjRQKbZACOipaKsTeJJ5VduuXydNs
                            WuR5DUHfZmlcFOCVkE4GYMU3dLqMBAXdcNyeLs8HmC3B9EWRu0aTHj3PY4Mg26etOZNxoPjbkz06r7ucrJ
                            4pG8SsZKXbuMCZjc2LI6jObUPc0ZZm3weh8+KsbHmcKJzsFuUQcdQBYq1/QKssjN7IRxPhQvxnQ18ZJoN
                            yNLXzGjg4YfSftZGzB6QSCIYKBx7aGyMQGxD4+ryxqVZPF4w7Cls6cj+rVgHB+CKeeTxa577C+why9OVu+l
                            lShHr4M42cvaCE6QscGuw7VfXNFKiSx4qL5DTFZkkDjFH2Yq4KxGRsJu0ejsBiMcLM84WE16RosBcyX2cO
                            uyZLWdAU6pBLDUoOYKA1EiIoz+AMch13DNIzdJmj/anCGsI7LQw5Rivjgct6nbwiQ8uxsHCHjVCxZaVets
                            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" className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div>
                                    <h4 className="card-title">DST</h4>
                                    <h6 className="card-text">Finance Admin</h6>
                                    <p style={{maxWidth: "85%"}}>Facilitating and improving the financial practices and procedures within
                                         a company or organisation. Ensuring an employer's adherence to financial
                                          regulations and legislation.</p>
                                </div>
                                <div className="d-flex justify-content-end pt-3">
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
                                    <p style={{maxWidth: "85%"}}>Facilitating and improving the financial practices and procedures within
                                         a company or organisation. Ensuring an employer's adherence to financial
                                          regulations and legislation.</p>
                                </div>
                                <div className="d-flex justify-content-end pt-3">
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
                                    <p style={{maxWidth: "85%"}}>Facilitating and improving the financial practices and procedures within
                                         a company or organisation. Ensuring an employer's adherence to financial
                                          regulations and legislation.</p>
                                </div>
                                <div className="d-flex justify-content-end pt-3">
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

export default InternshipList;