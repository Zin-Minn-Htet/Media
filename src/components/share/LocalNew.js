import React from 'react'

export default function LocalNew({ image }) {
    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <img src={image} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='' className='btn btn-info btn-sm float-end'>
                       <strong> Detail...</strong>
                    </a>
                </div>

            </div>
        </div>
    )
}
