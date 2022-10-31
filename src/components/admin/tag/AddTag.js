import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../share/Loading';

const Addcat = () => {

  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [loading,setLoading] = useState(false);
  const userData = useSelector(state => state.userData);
  const navigate = useNavigate()

  const onFileChange = e => {
    setFile(e.target.files[0])
  }

  const apiTagsAdd = async () => {

    const formData = new FormData();
    formData.append("name", name)
    formData.append("file", file)

    const response = await fetch("http://13.214.58.126:3001/tags", {
      method: "POST",
      body: formData,
      headers: {
        authorization: `Bearer ${userData.token}`
      }
    })
    const resData = await response.json();
    if (resData.con) {
      navigate('/admin/tags/all')
    } else {
      console.log(resData)
    }
    setLoading(false)
  }

  const submitTags = (e) => {
    setLoading(true)
    e.preventDefault();
    apiTagsAdd();
  }

  return (
    <div className='col-md-6 offset-md-3 bg-dark p-5'>
      {loading && <Loading/> }
      <h3 className='text-white text-center'>Add New Tags</h3>
      <form onSubmit={submitTags}>
        <div className="mb-2">
          <label htmlFor="name" className="form-label text-white">Name</label>
          <input type="text" className="form-control"
            required
            minLength={5}
            onChange={e => setName(e.target.value)}
            id="name" />
        </div>
        <div className="mb-5">
          <label htmlFor="formFile" className="form-label text-white">Image</label>
          <input className="form-control" type="file" id="formFile" onChange={onFileChange} />
        </div>
        <div className='d-flex justify-content-end'>
          <button type='reset' className='btn btn-sm btn-outline-warning me-2'>Cancel</button>
          <button type='submit' className='btn btn-sm btn-outline-success'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default Addcat