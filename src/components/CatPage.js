import React, { useEffect, useState } from 'react';
import Header from './share/Header';
import HotNew from './share/HotNew';
import p1 from '../statics/p1.jpg';
import p3 from '../statics/p3.jpg';
import p4 from '../statics/p4.jpg';
import p5 from '../statics/p5.jpg';
import p2 from '../statics/p2.jpg';
import banner1 from '../statics/banner1.jpg';
import banner2 from '../statics/banner2.jpg';
import sidead from '../statics/sideads.jpg';
import LocalNew from './share/LocalNew';
import SideNew from './share/SideNew';
import SideVideoNew from './share/SideVideoNew';
import { useParams } from 'react-router-dom';

export default function CatPage() {

    const [hotnew, setHotnew] = useState([]);
    const [cats, setCats] = useState([]);
    const [titleName, setTitleName] = useState('');
    const { type, id } = useParams();

    const loadHotNews = async () => {
        const response = await fetch("http://13.214.58.126:3001/posts/paginate/1");
        const resData = await response.json();
        setHotnew(resData.result.splice(0, 6))
    }
    const loadByCats = async () => {
        const response = await fetch(`http://13.214.58.126:3001/posts/bycat/${id}`);
        const resData = await response.json();
        setTitleName(resData.result[0].cat.name)
        setCats(resData.result.splice(0, 6))
    }
    useEffect(() => { loadHotNews(); loadByCats() }, [id]);

    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col-md-8'>
                    <div className='d-flex justify-content-between bg-dark p-1 mb-2'>
                        <button className='btn btn-primary rounded-0 btn-sm'>{titleName}</button>
                        <button className='btn btn-primary rounded-0 btn-sm'>Read More</button>
                    </div>
                    <div className='row'>
                        {
                            cats.length > 0 && cats.map(hn => <SideNew key={hn._id} post={hn} wordcount={370} />)
                        }
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='d-flex justify-content-between bg-dark p-1'>
                        <button className='btn btn-primary rounded-0 btn-sm'>Hot News</button>
                        <button className='btn btn-primary rounded-0 btn-sm'>Read More</button>
                    </div>
                    {
                        cats.length > 0 && cats.map(hn => <SideNew key={hn._id} post={hn} wordcount={40} />)
                    }
                </div>
            </div>
        </div>
    )
}
