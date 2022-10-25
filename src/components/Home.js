import React from 'react';
import Header from './share/Header';
import HotNew from './share/HotNew';
import p1 from '../statics/p1.jpg';
import p3 from '../statics/p3.jpg';
import p4 from '../statics/p4.jpg';
import p5 from '../statics/p5.jpg';
import p2 from '../statics/p2.jpg';
import sidead from '../statics/sideads.jpg';

export default function Home() {
    return (
        <div className='container'>
            <Header />
            <div className='row'>
                <div className='col-md-8 mt-3'>
                    <div className='row'>
                        <HotNew image={p1} />
                        <HotNew image={p2} />
                        <HotNew image={p3} />
                        <HotNew image={p4} />
                        <HotNew image={p5} />
                        <HotNew image={p1} />
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={sidead} width="100%" />
                </div>
            </div>
        </div>
    )
}
