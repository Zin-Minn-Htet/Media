import React from 'react'

export default function LocalNew({ localNews }) {
    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <img src={`http://13.214.58.126:3001/uploads/${localNews.image}`} width="100%" height="150px" className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{localNews.title}</h5>
                    <p className="card-text">{localNews.content.substring(0,80)}</p>
                    <a href='' className='btn btn-info btn-sm float-end'>
                       <strong> Detail...</strong>
                    </a>
                </div>

            </div>
        </div>
    )
}
