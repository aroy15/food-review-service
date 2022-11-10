import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import BannerBottomCards from '../Home/BannerBottomCards/BannerBottomCards';
import BannerGlobal from '../Shared/BannerGlobal/BannerGlobal';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-aroy15.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                return setServices(data)
            })
    }, [])
    return (
        <>
            <BannerGlobal title='Services'></BannerGlobal>
            <BannerBottomCards></BannerBottomCards>
            <section className='pt-20'>
                <div className="container">
                    {
                        loading ? <div className='flex justify-center mt-10'><Spinner color="failure" aria-label="Failure spinner example" /></div>
                            :
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                                {
                                    services.map(service => <ServiceCard
                                        key={service._id}
                                        service={service}
                                    ></ServiceCard>)
                                }
                            </div>
                    }

                </div>
            </section>
        </>
    );
};

export default Services;