import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNew({ post, wordcount }) {
    return (
        <div className=' my-3'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={`http://13.214.58.126:3001/uploads/${post.image}`} className="card-img-top" alt="..." />
                </div>
                <div className='col-md-6'>
                    <h5>{post.title}</h5>
                    <p className="card-text para-size"><Link to={`/postdetail/${post._id}`}>{post.content.substring(0, wordcount)}</Link> </p>
                </div>
            </div>
        </div>
    )
}
