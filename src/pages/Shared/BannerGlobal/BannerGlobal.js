import React from 'react';
import servicesBg from '../../../assets/img/services-bg.webp'

const BannerGlobal = ({ title }) => {
    return (
        <section className='bg-no-repeat bg-cover bg-center text-center pt-52 pb-28 bg-fixed' style={{ backgroundImage: `url(${servicesBg})`, backgroundColor: '#212121' }}>
            <div className="container">
                <div className=''>
                    <h2 className='text-5xl text-white uppercase pb-6'>{title}</h2>
                </div>
            </div>
        </section>
    );
};

export default BannerGlobal;