import React from 'react'

export default function SideNew({ image }) {
    return (
        <div className=' my-3'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className='col-md-6'>
                    <p className="card-text">build on the card title and make up the title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}
