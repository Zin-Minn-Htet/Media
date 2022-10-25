import React from 'react';
import p1 from '../../statics/p1.jpg';
import p2 from '../../statics/p2.jpg';
import p3 from '../../statics/p3.jpg';
import p4 from '../../statics/p4.jpg';
import p5 from '../../statics/p5.jpg';
import SlideImage from './SlideImage';
import video from '../../statics/video.mkv';
import { useSelector } from 'react-redux';

export default function Header() {

    const sliteData = useSelector(state => state.sliteData);


    return (
        <div className='row mt-3' >
            <div className='col-md-8'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <SlideImage image={p1} active="active" alt="Slide 1" title={sliteData.title1} desc={sliteData.descTitle} />
                        <SlideImage image={p2} active=" " alt="Slide 1" title="Slide 1 title" desc="Some representative placeholder content for the second slide." />
                        <SlideImage image={p3} active=" " alt="Slide 1" title="Slide 1 title" desc="Some representative placeholder content for the second slide." />
                        <SlideImage image={p4} active=" " alt="Slide 1" title="Slide 1 title" desc="Some representative placeholder content for the second slide." />
                        <SlideImage image={p5} active=" " alt="Slide 1" title="Slide 1 title" desc="Some representative placeholder content for the second slide." />
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <video width='100%' controls>
                    <source src={video}></source>
                </video>
                <h6 className='text-center mt-1'><strong>{sliteData.title2} </strong></h6>
                <p className='para'>{sliteData.para1} </p>
            </div>
        </div>
    )
}
