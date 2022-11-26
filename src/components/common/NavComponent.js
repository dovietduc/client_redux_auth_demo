import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function NavComponent() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector(state => state.auth);
    

    useEffect(() => {
        // run in here
        async function getUserLogin() {
            try {
                const response = await axios.get('api/auth/me');
                const user = response.data;
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: user
                }) 
            } catch (error) {
                if(error.response.status === 401) {
                    navigate('/login');
                }
            }
            
        }
        
        getUserLogin();

    }, [])



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
                    <a className="btn btn-success">{ authState.user.username }</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavComponent;
