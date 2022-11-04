import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import p1 from '../statics/p1.jpg';
import SideNew from './share/SideNew';

const PostDetail = () => {

    const [hotnew, setHotnew] = useState([]);
    const [detailData,setDetailData] = useState({});
    const [date,setDate] = useState('');
    const {id} = useParams();

    const loadHotNews = async () => {
        const response = await fetch("http://13.214.58.126:3001/posts/paginate/1");
        const resData = await response.json();
        setHotnew(resData.result.splice(0, 6))
    }
    const loadOnePost = async () => {
        const response = await fetch(`http://13.214.58.126:3001/posts/${id}`);
        const resData = await response.json();
        setDate(resData.result.created.split("T")[0])
        setDetailData(resData.result)
    }
    useEffect(() => {loadHotNews();loadOnePost()}, [])
    return (
        <div className='container'>
            <div className='row my-3'>
                <div className='col-md-8 dright'>
                    <div className='bg-dark p-1 mb-2'>
                        <h6 className='text-center text-white'>{detailData.title}</h6>
                    </div>
                    <img src={`http://13.214.58.126:3001/uploads/${detailData.image}`} width="100%" height='350px' />
                    <strong>Date - {date}</strong>

                    <p>
                        {detailData.content}
                    </p>
                </div>
                <div className='col-md-4'>
                        <div className='d-flex justify-content-between bg-dark p-1'>
                            <button className='btn btn-primary rounded-0 btn-sm'>Hot News</button>
                            <button className='btn btn-primary rounded-0 btn-sm'>Read More</button>
                        </div>
                        {
                            hotnew.length > 0 && hotnew.map(hn => <SideNew key={hn._id} post={hn} wordcount={40} />)
                        }
                    </div>
                </div>
            </div>
    )
}

export default PostDetail