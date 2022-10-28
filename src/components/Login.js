import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Loading } from './share/Loading';
import { addUser, removeUser } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();

    const apiLogin = async user => {
        const response = await fetch("http://13.214.58.126:3001/users", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        })
        const resData = await response.json();

        if (resData.con) {
            setLoading(false);
            // console.log(resData)
            dispatch(addUser(resData.result))
            navigate('/admin')
        }
        else {
            console.log(resData);
        }
    }

    const loginUser = e => {
        e.preventDefault();
        setLoading(true);
        let user = { phone, password }
        apiLogin(user)
    }

    return (
        <div className='container'>
            {loading && <Loading />}
            <div className='row'>
                <div className='col-md-6 my-5 offset-md-3 bg-dark p-5'>
                    <h3 className='text-white text-center'>Login To Post</h3>
                    <form onSubmit={loginUser}>
                        <div className="mb-3">
                            <label htmlFor="tel" className="form-label text-white">Phone</label>
                            <input type="tel" className="form-control rounded-0 bg-dark text-white"
                                minLength={8}
                                maxLength={11}
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                id="tel" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-white">Password</label>
                            <input type="password" className="form-control rounded-0 bg-dark text-white"
                                minLength={8}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                id="password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input bg-dark border-white" id="exampleCheck1" />
                            <label className="form-check-label text-white" htmlFor="exampleCheck1">Rember Me</label>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link to="/register">Not a member yet Register here!</Link>
                            <div>
                                <button type="reset" className="btn btn-outline-warning btn-sm mx-2">Cancel</button>
                                <button type="submit" className="btn btn-outline-success btn-sm">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
