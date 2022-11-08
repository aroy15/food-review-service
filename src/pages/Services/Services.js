import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerBottomCards from '../Home/BannerBottomCards/BannerBottomCards';
import BannerGlobal from '../Shared/BannerGlobal/BannerGlobal';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    return (
        <>
            <BannerGlobal title='Services'></BannerGlobal>
            <BannerBottomCards></BannerBottomCards>
            <section className='pt-20'>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;