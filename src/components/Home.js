import React, { useEffect, useState } from 'react';
import Header from './share/Header';
import HotNew from './share/HotNew';
import banner1 from '../statics/banner1.jpg';
import banner2 from '../statics/banner2.jpg';
import sidead from '../statics/sideads.jpg';
import LocalNew from './share/LocalNew';
import SideNew from './share/SideNew';
import SideVideoNew from './share/SideVideoNew';
import { getData } from '../utils/Api';

export default function Home() {

    const [hotnew, setHotnew] = useState([]);
    const [localNews, setLocalNews] = useState([]);

    const loadHotNews = async () => {
        const data = await getData("/posts/paginate/1");
        setHotnew(data.result.splice(0, 6));

        const data2 = await getData("/posts/bycat/6361edd302e3e94e7b3406a4");
        setLocalNews(data2.result)
    }
    useEffect(() => { loadHotNews()}, []);

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
                    {
                        hotnew.length > 0 && hotnew.map(hn => <SideNew key={hn._id} post={hn} wordcount={50} /> ) 
                    }
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
