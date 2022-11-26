import axios from 'axios';
import { useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';

// 1. call api get list user
// 2. save list user to store -> store state change -> rerender app

function AdminPage() {

    const dispatch = useDispatch();
    const users = useSelector(function(state){
        return state.user;
    });

    useEffect(() => {
        async function getistUser() {
            const response = await axios.get('/auth/admin/user');
            // save list user to store
            dispatch({
                type: 'GET_USER_LIST',
                payload: response.data
            })

        }

        getistUser();

    }, [])

    return (
        <AdminLayout>
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

                                            { 
                                                users.map(function(user){
                                                    return (
                                                        <tr key={user._id}>
                                                            <td>{user._id}</td>
                                                            <td>{user.username}</td>
                                                            <td>{user.role}</td>
                                                            <td>{user.emai}</td>
                                                            <td>
                                                                <button className="btn btn-danger">
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            
                                            }
                                               


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminPage;
