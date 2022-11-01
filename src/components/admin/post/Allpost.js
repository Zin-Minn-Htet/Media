import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import UiPost from './UiPost'

const Allpost = () => {

    const [posts,setPosts] = useState([]);
    const userData = useSelector(state => state.userData)

    const loadPosts = async () => {
        const response = await fetch("http://13.214.58.126:3001/posts/paginate/1");
        const resData = await response.json();
        setPosts(resData.result)
    }
    useEffect(()=>loadPosts,[]);

    const deletePost = async (id) => {
        const response = await fetch(`http://13.214.58.126:3001/posts/${id}`,{
            method: "DELETE",
            headers: {
                "content-type" : "application/json",
                authorization : `bearer ${userData.token}`
            }
        })

        const resData = await response.json();
        setPosts(resData.result)

        loadPosts();
    }

  return (
    <div>
        <Link to="/admin/posts/add" className='btn btn-primary btn-sm mb-3'>Add Posts</Link>
        <div className='row'>
            {
                posts.map(post => <UiPost key={post._id} post={post} deletePost={deletePost} />)
            }
        </div>
    </div>
  )
}

export default Allpost