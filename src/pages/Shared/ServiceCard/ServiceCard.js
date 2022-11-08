import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { serviceName, serviceDetails, image, price, _id } = service;
    return (

        <div className="w-full border border-primary bg-white rounded-lg overflow-hidden shadow-md">
            <a href="#">
                <img className="h-80 w-full object-cover object-center" src={image} alt={serviceName} />
            </a>
            <div className="px-5 py-5">
                <h3 className="text-2xl uppercase font-bold tracking-tight text-black">{serviceName}</h3>
                <p className='py-6'>{serviceDetails.slice(0,90)}...</p>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-primary">${price}</span>
                    <Link to={`/services/${_id}`} className="hover:bg-primary font-semibold rounded uppercase bg-secondary py-2 px-6 text-white">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;