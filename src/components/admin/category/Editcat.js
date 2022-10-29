import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Editcat = () => {

  const [name, setName] = useState('');
  const userData = useSelector(state => state.userData);
  const navigate = useNavigate();
  const {id} = useParams();

  const apiCategoryUpdate = async () => {

    const response = await fetch(`http://13.214.58.126:3001/cats/${id}`, {
      method: "PATCH",
      body: JSON.stringify({name : name}),
      headers: {
        "content-type" : "application/json",
        authorization: `Bearer ${userData.token}`
      }
    })
    const resData = await response.json();
    if (resData.con) {
      navigate('/admin/cats/all')
    } else {
      console.log(resData)
    }
  }

  const loadCategory = async () => {
    const response = await fetch(`http://13.214.58.126:3001/cats/${id}`)
    const resData = await response.json();
    setName(resData.result.name)
  }

  useEffect(() => {
    loadCategory()
  },[])

  const submitCategory = (e) => {
    e.preventDefault();
    apiCategoryUpdate();
  }

  return (
    <div className='col-md-6 offset-md-3 bg-dark p-5'>
      <h3 className='text-white text-center'>Edit Category Name</h3>
      <form onSubmit={submitCategory}>
        <div className="mb-5">
          <label htmlFor="name" className="form-label text-white">Name</label>
          <input type="text" className="form-control"
            required
            minLength={5}
            value={name}
            onChange={e => setName(e.target.value)}
            id="name" />
        </div>
        <div className='d-flex justify-content-end'>
          <button type='reset' className='btn btn-sm btn-outline-warning me-2'>Cancel</button>
          <button type='submit' className='btn btn-sm btn-outline-success'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default Editcat