import React from 'react';

function RegisterPage() {
    return (
        <div className="register-page">
            <div className="register-box">
                <div className="register-logo">
                    <a href="https://github.com">
                        <b>Code</b>Love
                    </a>
                </div>

                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">
                            Register a new membership
                        </p>

                        <form>
                            <div className="input-group mb-3">
                                <input
                                    id="username"
                                    type="text"
                                    className="form-control"
                                    placeholder="User name"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a
                                href="https://github.com"
                                className="btn btn-block btn-primary"
                            >
                                <i className="fab fa-facebook mr-2"></i>
                                Sign up using Facebook
                            </a>
                            <a
                                href="https://github.com"
                                className="btn btn-block btn-danger"
                            >
                                <i className="fab fa-google-plus mr-2"></i>
                                Sign up using Google+
                            </a>
                        </div>

                        <a href="/login" className="text-center">
                            I already have a membership
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
