import React from 'react';

function AdminPage() {
    return (
        <div className="wrapper">
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item d-none d-sm-inline-block">
                        <button type="button" className="btn btn-primary">
                            Logout
                        </button>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-3">
                        <a className="btn btn-success">
                            Admin
                        </a>
                    </li>
                </ul>
            </nav>
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
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">List User</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a
                                            className="btn btn-primary"
                                            href="/admin/user/create"
                                        >
                                            Create
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body table-responsive p-0">
                                        <table className="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>UserName</th>
                                                    <th>Role</th>
                                                    <th>Email</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
												
                                                <tr>
                                                    <td>183</td>
                                                    <td>test</td>
                                                    <td>regular</td>
                                                    <td>test@gmail.com</td>
                                                    <td>
                                                        <button className="btn btn-danger">
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="main-footer">
                <div className="float-right d-none d-sm-inline">
                    Anything you want
                </div>
                <strong>
                    Copyright © 2014-2021
                    <a href="https://adminlte.io">AdminLTE.io</a>.
                </strong>
                All rights reserved.
            </footer>
        </div>
    );
}

export default AdminPage;
