import React from 'react';
import { Link } from 'react-router-dom';

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
                                <Link
                                    to="/register"
                                    className="btn btn-primary btn-block"
                                >
                                    Register
                                </Link>
                            </div>
                            <div className="col-6">
                                <Link
                                    to="/login"
                                    className="btn btn-primary btn-block"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexPage;