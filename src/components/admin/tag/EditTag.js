import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { patchData,getData } from '../../../utils/Api';

const Editcat = () => {

  const [name, setName] = useState('');
  const userData = useSelector(state => state.userData);
  const navigate = useNavigate();
  const {id} = useParams();

  const apiTagsUpdate = async () => {

    const resData = await patchData(`/tags/${id}`,{name:name},userData.token);
    
    if (resData.con) {
      navigate('/admin/tags/all')
    } else {
      console.log(resData)
    }
  }

  const loadTags = async () => {
    const resData = await getData(`/tags/${id}`)
    setName(resData.result.name)
  }

  useEffect(() => {
    loadTags()
  },[])

  const submitCategory = (e) => {
    e.preventDefault();
    apiTagsUpdate();
  }

  return (
    <div className='col-md-6 offset-md-3 bg-dark p-5'>
      <h3 className='text-white text-center'>Edit Tag Name</h3>
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