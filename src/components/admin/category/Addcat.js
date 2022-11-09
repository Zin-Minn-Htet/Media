import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../share/Loading';
import { formPost } from '../../../utils/Api';

const Addcat = () => {

  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [loading,setLoading] = useState(false);
  const userData = useSelector(state => state.userData);
  const navigate = useNavigate()

  const onFileChange = e => {
    setFile(e.target.files[0])
  }

  const apiCategoryAdd = async () => {
    const formData = new FormData();
    formData.append("name", name)
    formData.append("file", file)

    const resData = await formPost("/cats",formData,userData.token)

    if (resData.con) {
      navigate('/admin/cats/all')
    } else {
      console.log(resData)
    }
    setLoading(false)
  }

  const submitCategory = (e) => {
    setLoading(true)
    e.preventDefault();
    apiCategoryAdd();
  }

  return (
    <div className='col-md-6 offset-md-3 bg-dark p-5'>
      {loading && <Loading/> }
      <h3 className='text-white text-center'>Add New category</h3>
      <form onSubmit={submitCategory}>
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