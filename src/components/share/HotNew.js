import React from 'react'

export default function HotNew({ image }) {
    return (
        <div className='col-md-6 mb-1'>
                    <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={image} className="card-img-top" alt="..." />
                        </div>
                        <div className='col-md-6'>
                            <p className="card-text">Some quick example text to build on the card title.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
