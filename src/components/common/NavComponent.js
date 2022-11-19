import React from 'react';

function NavComponent() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item d-none d-sm-inline-block">
                    <button type="button" className="btn btn-primary">
                        Logout
                    </button>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                    <a className="btn btn-success">Admin</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavComponent;
