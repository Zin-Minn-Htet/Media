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

export default function Home() {

    const [hotnew, setHotnew] = useState([]);
    const [localNews, setLocalNews] = useState([]);

    const loadHotNews = async () => {
        const response = await fetch("http://13.214.58.126:3001/posts/paginate/1");
        const resData = await response.json();
        console.log(resData)
        setHotnew(resData.result.splice(0, 6))
    }
    const loadLocalNews = async () => {
        const response = await fetch("http://13.214.58.126:3001/posts/bycat/6361edd302e3e94e7b3406a4");
        const resData = await response.json();
        console.log(resData)
        setLocalNews(resData.result)
    }
    useEffect(() => { loadHotNews(); loadLocalNews() }, []);

    return (
        <div className='container'>
            <Header />
            <div className='row'>
                <div className='col-md-8'>
                    <div className='d-flex justify-content-between bg-dark p-1 mb-2'>
                        <button className='btn btn-primary rounded-0 btn-sm'>Hot News</button>
                        <button className='btn btn-primary rounded-0 btn-sm'>Read More</button>
                    </div>
                    <div className='row'>
                        {/* <HotNew image={p1} /> */}
                        {
                            hotnew.length > 0 && hotnew.map(hn => <HotNew key={hn._id} hotnew={hn} />)
                        }
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={banner1} width="100%"></img>
                        </div>
                        <div className='col-md-6'>
                            <img src={banner2} width="100%"></img>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={sidead} width="100%" />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='d-flex justify-content-between bg-dark p-1 mb-2'>
                        <button className='btn btn-primary rounded-0 btn-sm'>Local News</button>
                        <button className='btn btn-primary rounded-0 btn-sm'>Read More</button>
                    </div>
                    <div className='row'>
                        {/* "6361edd302e3e94e7b3406a4" */}
                        {/* <LocalNew image={p1} /> */}
                        {
                           localNews.length > 0 && localNews.map(ln => <LocalNew key={ln._id} localNews={ln}  /> )
                        }
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='d-flex justify-content-between bg-dark p-1'>
                        <button className='btn btn-primary rounded-0 btn-sm'>Hot News</button>
                        <button className='btn btn-primary rounded-0 btn-sm'>Read More</button>
                    </div>
                    <SideNew image={p2} />
                    <SideNew image={p3} />
                    <SideNew image={p4} />
                    <div className='d-flex justify-content-between bg-dark p-1 my-2'>
                        <button className='btn btn-primary rounded-0 btn-sm'>TV News</button>
                        <button className='btn btn-primary rounded-0 btn-sm'>Read More</button>
                    </div>
                    <SideVideoNew />
                </div>
            </div>
        </div>
    )
}
