import React from 'react'
import { Link } from 'react-router-dom'

const UiAllTag = ({tag,apiTagDelete}) => {
    return (
        <div className='col-md-4'>
            <div className="card my-2" >
                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-5'>
                            <img src={`http://13.214.58.126:3001/uploads/${tag.image}`} width="100%" height="70px" />
                        </div>
                        <div className='col-md-7'>
                            <h6>{tag.name}</h6>
                            <Link to={`/admin/tags/edit/${tag._id} `} className="btn btn-warning btn-sm me-1">
                                <i className="fa fa-edit"></i>
                            </Link>
                            <button className='btn btn-danger btn-sm' onClick={() => apiTagDelete(tag._id)}>
                                <i className='fa fa-trash'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UiAllTag