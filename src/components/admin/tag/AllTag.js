import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import UiAllTag from './UiAllTag';

function AllTag() {

    const [tags,setTags] = useState([]);

    const loadTag = async () => {
        const response = await fetch("http://13.214.58.126:3001/tags")
        const resData = await response.json()
        setTags(resData.result)
    }

    useEffect(() => {
        loadTag();
    },[])

    const userData = useSelector(state => state.userData)

    const apiTagDelete = async (id) => {
        const response = await fetch(`http://13.214.58.126:3001/tags/${id}`,{
            method: "DELETE",
            headers: {
                "content-type" : "application/json",
                authorization: `Bearer ${userData.token}`
            }
        })
        const resData = await response.json();
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