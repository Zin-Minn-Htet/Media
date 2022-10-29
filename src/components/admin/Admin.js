import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='container fixHeight my-2'>
      <div className='row'>
        <div className='col-md-3'>
          <ul className="list-group">
            <Link to='/admin/cats/all'><li className="list-group-item rounded-0">Categorys</li></Link>
            <Link to='admin/tags/all'><li className="list-group-item rounded-0">Tags</li></Link>
            <Link to='admin/posts/all'><li className="list-group-item rounded-0">Posts</li></Link>
          </ul>
        </div>
        <div className='col-md-9'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin