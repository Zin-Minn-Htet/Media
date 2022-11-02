import React from 'react'
import { Link } from 'react-router-dom'

const UiPost = ({ post ,deletePost}) => {
    return (
        <div className='col-md-4 mb-3'>
            <div className="card post-card">
                <img src={`http://13.214.58.126:3001/uploads/${post.image}`} alt={post.image} width="100%" height="200px" />
                <div className="card-body">
                    <div className='mb-2'>
                        <Link to={`/admin/posts/edit/${post._id}`} className='btn btn-warning btn-sm me-2'><i className='fa fa-edit'></i> </Link>
                        <button className='btn btn-danger btn-sm' onClick={() => deletePost(post._id)}><i className='fa fa-trash' ></i> </button>
                    </div>
                    <h4 className="card-title">{post.title.substring(0, 15)}</h4>
                    <p className="card-text">{post.content.substring(0, 100)}</p>

                </div>
            </div>
        </div>
    )
}

export default UiPost