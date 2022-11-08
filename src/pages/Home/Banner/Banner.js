import React from 'react';
import bannerBg from '../../../assets/img/italian-bg.jpg';
import bannerImg from '../../../assets/img/photo-slider.png';
import './Banner.css'

const Banner = () => {
    return (
        <section style={{backgroundImage:`url(${bannerBg})`}} className='home-banner bg-no-repeat bg-cover bg-center overflow-hidden pb-12 pt-44'>
            <div className="container">
                <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10 text-center lg:text-left">
                    <div className="w-full lg:w-1/2">
                        <img src={bannerImg} alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 text-white">
                        <h1 className='text-5xl uppercase'>My Home Made <span className='text-primary'>Food Service</span></h1>
                        <p className='py-5'>Ornate Italian cuisine with delivery. Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</p>
                        <button className='bg-secondary hover:bg-primary transition text-white rounded px-7 py-3 uppercase font-semibold border-0'>See My Menu</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;