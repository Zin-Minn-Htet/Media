import React from 'react'
import { Link } from 'react-router-dom'

const FallbackRoute = () => {
  return (
    <div className='my-5'>
        <h1 className='text-center'>No Route Found</h1>
        <h3 className='text-center'><Link to='/login'>Go Back</Link></h3>
    </div>
  )
}

export default FallbackRoute