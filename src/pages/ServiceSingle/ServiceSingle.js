import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerBottomCards from '../Home/BannerBottomCards/BannerBottomCards';
import BannerGlobal from '../Shared/BannerGlobal/BannerGlobal';

const ServiceSingle = () => {
    const service = useLoaderData()
    const { serviceName, serviceDetails, image, price, rating, _id } = service;
    return (
        <>
            <BannerGlobal title={serviceName}></BannerGlobal>
            <BannerBottomCards></BannerBottomCards>
            <section className='py-20'>
                <div className="container">
                    <div className='max-w-4xl w-full mx-auto'>
                        <img className='w-full rounded' src={image} alt={serviceName}/>
                        <h2 className='text-4xl py-8 uppercase'>{serviceName}</h2>
                        <div className='text-2xl color-primary font-bold pb-8 flex gap-8'>
                            <p>Price: <span className='text-primary'>${price}</span></p>
                            <p>Rating: <span className='text-yellow-500'>{rating}</span></p>
                        </div>
                        <p>{serviceDetails}</p>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ServiceSingle;