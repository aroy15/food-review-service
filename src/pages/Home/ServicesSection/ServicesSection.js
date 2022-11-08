import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import servicesBg from '../../../assets/img/services-bg.webp'
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const ServicesSection = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        const limit = 3;
        fetch(`http://localhost:5000/services?limit=${limit}`)
        .then(res => res.json())
        .then(data => {
            return setServices(data)
        })
    },[])

    return (
        <section className='text-center bg-no-repeat bg-cover bg-center py-28 bg-fixed' style={{backgroundImage:`url(${servicesBg})`, backgroundColor:'#212121'}}>
            <div className="container">
                <h2 className='text-5xl mb-8 uppercase text-white'>My Best Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <Link to='/services' class="bg-secondary hover:bg-primary transition text-white rounded px-7 py-3 uppercase font-semibold border-0">See All Services</Link>
            </div>
        </section>
    );
};

export default ServicesSection;