import React from 'react';
import video from '../../statics/video.mkv';

export default function SideVideoNew() {
    return (
        <div className=''>
            <div>
                <video width='100%' controls>
                    <source src={video}></source>
                </video>
            </div>
            <div>
                <p className="card-text">build on the card title and make up the title build on the card title and make up the title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}
