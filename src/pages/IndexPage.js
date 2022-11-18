import React from 'react';

function IndexPage() {
    return (
        <div className="register-page">
            <div className="register-box">
                <div className="register-logo">
                    <a href="https://github.com">
                        <b>Admin</b>LTE
                    </a>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Index Page</p>

                        <div className="row">
                            <div className="col-6">
                                <a
                                    href="/register.html"
                                    className="btn btn-primary btn-block"
                                >
                                    Register
                                </a>
                            </div>
                            <div className="col-6">
                                <a
                                    href="/login.html"
                                    className="btn btn-primary btn-block"
                                >
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;
