export default function layout({ children, type }) {
    return (
        <div className="auth-basic-wrapper d-flex align-items-center justify-content-center">
            <div className="container-fluid my-5 my-lg-0">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
                        <div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
                            <div className="card-body p-5">
                                <img
                                    src="assets/images/logo1.png"
                                    className="mb-4"
                                    width="145"
                                    alt="logo"
                                />
                                <h4 className="fw-bold">Get Started Now</h4>
                                <p className="mb-0">
                                    Enter your credentials to {type} your
                                    account
                                </p>
                                <div className="form-body my-5">
                                {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
