import React from 'react';

function AsideComponent() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="https://github.com" className="brand-link">
                <span className="brand-text font-weight-light">Code Love</span>
            </a>
            <div className="sidebar">
                <nav className="mt-4">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="nav-item menu-open">
                            <a
                                href="https://github.com"
                                className="nav-link active"
                            >
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>List User</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default AsideComponent;
