import React from 'react';
import LoadingImg from '../../statics/loading.gif';

export const Loading = () => {
  return (
    <div className='loading-box'>
        <img src={LoadingImg} />
    </div>
  )
}

