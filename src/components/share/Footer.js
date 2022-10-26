import React from 'react';
import logo from '../../statics/logo.png';

export default function Footer() {
    return (
        <div className='container-fluid bg-dark'>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-md-4'>

                        <ul className='list-group'>
                            <li className='list-group-item bg-dark border-info'>
                                <i className='fa fa-user text-warning mx-3'></i>
                                <a href='#'>About Us</a>
                            </li>
                            <li className='list-group-item bg-dark border-info'>
                                <i className='fa fa-envelope text-warning mx-3'></i>
                                <a href='#'>zinminn34119@gmail.com</a>
                            </li>
                            <li className='list-group-item bg-dark border-info'>
                                <i className='fa-brands fa-google text-warning mx-3'></i>
                                <a href='#'>Google Community</a>
                            </li>
                            <li className='list-group-item bg-dark border-info'>
                                <i className='fa-brands fa-facebook text-warning mx-3'></i>
                                <a href='#'>Facebook Page</a>
                            </li>
                            <li className='list-group-item bg-dark border-info'>
                                <i className='fa-brands fa-youtube text-warning mx-3'></i>
                                <a href='#'>YouTube Channel</a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-4 d-flex flex-column align-items-center'>
                        <button className='btn btn-success btn-sm'>Download Android App</button><br></br>
                        <button className='btn btn-success btn-sm'>Download ISO App  </button>
                        <h5 className='text-white m-3'>Our Sponsor</h5>
                        <img src={logo} width='50px' />
                    </div>

                    <div className='col-md-4'>
                        <form>
                            <div className="mb-3">
                                <input type="name" className="form-control bg-dark text-white rounded-0" id="name" aria-describedby="emailHelp" placeholder='Name'/>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control bg-dark text-white rounded-0" id="email" placeholder='Email' />
                            </div>
                            <textarea className="form-control bg-dark text-white rounded-0" id="exampleFormControlTextarea1" rows="3" placeholder='Context'></textarea>
                            <button type="submit" className="btn btn-outline-primary btn-sm float-end mt-2">Contact</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
