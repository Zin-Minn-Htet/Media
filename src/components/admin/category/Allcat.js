import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Uiallcat from './Uiallcat';
import { getData, deleteData } from '../../../utils/Api';

const Allcat = () => {

  const [cats, setCats] = useState([]);
  const userData = useSelector(state => state.userData)

  const loadCats = async () => {
    const resData = await getData("/cats");

    if (resData.con) {
      setCats(resData.result);
    }
    else {
      console.log(resData)
    }
  }

  const apiCategoryDelete = async (id) => {

    const resData = await deleteData(`/cats/${id}`,userData.token);
    
    loadCats()
  }

  useEffect(() => {
    loadCats()
  }, [])

  return (
    <div>
      <Link to='/admin/cats/add' className='btn btn-primary btn-sm' >Add</Link>
      <div className='row'>
        {cats.length > 0 && cats.map(cat => <Uiallcat key={cat._id} cat={cat} apiCategoryDelete={apiCategoryDelete} />)}
      </div>
    </div>
  )
}

export default Allcat