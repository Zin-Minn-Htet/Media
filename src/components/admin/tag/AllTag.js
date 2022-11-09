import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import UiAllTag from './UiAllTag';
import {deleteData, getData} from '../../../utils/Api';

function AllTag() {

    const [tags,setTags] = useState([]);

    const loadTag = async () => {
        const resData = await getData("/tags");
        setTags(resData.result)
    }

    useEffect(() => {
        loadTag();
    },[])

    const userData = useSelector(state => state.userData)

    const apiTagDelete = async (id) => {
        const resData = await deleteData(`/tags/${id}`,userData.token)
        setTags(resData.result);
        loadTag()
    }

  return (
    <div>
        <Link to="/admin/tags/add" className="btn btn-primary btn-sm" >Add Tag</Link>
        <div className='row'>
            {
                tags.map(tag => <UiAllTag key={tag._id} tag={tag} apiTagDelete={apiTagDelete} /> )
            }
        </div>
    </div>
  )
}

export default AllTag