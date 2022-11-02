import React from 'react'

export default function HotNew({ hotnew }) {
    return (
        <div className='col-md-6 mb-1'>
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={`http://13.214.58.126:3001/uploads/${hotnew.image}`} width="100%" height="100px" className="card-img-top" alt="..." />
                        </div>
                        <div className='col-md-6'>
                            <p className="card-text">{hotnew.content.substring(0, 50)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
