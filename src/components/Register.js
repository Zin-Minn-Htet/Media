import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const apiLogin = async user => {
        const response = await fetch('http://13.214.58.126:3001/users/register', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type' : 'application/json'
            }
        })
        const resData = await response.json();

        if(resData.con) {
            navigate('/login')
        }else {
            console.log(resData)
        }

    }

    const loginUser = e => {
        e.preventDefault();
        let user = {
            name, email, phone, password
        }
        apiLogin(user);
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 my-5 offset-md-3 bg-dark p-5'>
                    <h3 className='text-white text-center'>Register To Be A Member</h3>
                    <form onSubmit={loginUser}>
                        <div className="input-group mt-4 mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-user'></i></span>
                            <input type="text" className="form-control"
                                minLength={2}
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="name" />
                        </div>
                        <div className="input-group mt-4 mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-envelope'></i></span>
                            <input type="email" className="form-control"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="email" />
                        </div>
                        <div className="input-group mb-4">
                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-phone'></i></span>
                            <input type="tel" className="form-control"
                                minLength={8}
                                maxLength={11}
                                required
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="phone" />
                        </div>
                        <div className="input-group mb-4">
                            <span className="input-group-text" id="basic-addon1"><i className='fa fa-lock'></i></span>
                            <input type="password" className="form-control"
                                minLength={8}
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="password" />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link to="/login" >Already Member Login Here!</Link>
                            <div>
                                <button type="reset" className="btn btn-outline-warning btn-sm mx-2">Cancel</button>
                                <button type="submit" className="btn btn-outline-success btn-sm">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
