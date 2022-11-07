import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../statics/logo.png';
import { removeUser } from '../../redux/action';

export default function Nav() {

  const userData = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(removeUser(null));
    navigate("/login")
  }

  const [cats, setCats] = useState([]);

  const loadCats = async () => {
    const response = await fetch("http://13.214.58.126:3001/cats");
    const resData = await response.json();
    if (resData.con) {
      setCats(resData.result);
    }
    else {
      console.log(resData)
    }
  }
  useEffect(() => loadCats, [])

  return (
    <div>
      <nav className="container-fluid navbar navbar-expand-lg bg-dark">
        <div className="container">
          <img src={logoImage} alt='logoImg' width='30' height='30' />
          <Link to="/" className="navbar-brand text-white ms-2">BM Media</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {
                cats.length > 0 && cats.map(cat =>
                  <li className="nav-item" key={cat._id}>
                    <Link to={`catpage/bycat/${cat._id}`} className="nav-link active text-white"
                      aria-current="page" >{cat.name}</Link> </li>)
              }
              {userData && <li className="nav-item">
                <Link to='/admin' className="nav-link text-white">Admin</Link>
              </li>}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href='#' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className='fa fa-user' />
                </a>
                <ul className="dropdown-menu">
                  {!userData && <Link to="/login" className="dropdown-item">Login</Link>}
                  {!userData && <Link to="/register" className="dropdown-item">Register</Link>}
                  {userData && <li><a className='dropdown-item' onClick={logout}>Logout</a></li>}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
