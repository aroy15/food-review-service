import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCard = ({ service }) => {
    const { serviceName, serviceDetails, image, price, _id } = service;
    return (

        <div className="w-full text-center md:text-left border border-primary bg-white rounded-lg overflow-hidden shadow-md">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img className="h-80 w-full object-cover object-center pointer" src={image} alt={serviceName} />
                </PhotoView>
            </PhotoProvider>
            
            <div className="px-5 py-5">
                <h3 className="text-2xl uppercase font-bold tracking-tight text-black">{serviceName}</h3>
                <p className='py-6'>{
                    serviceDetails < 100 ?
                        serviceDetails
                        :
                        serviceDetails.slice(0, 90)
                }...</p>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-primary">${price}</span>
                    <Link to={`/services/${_id}`} className="hover:bg-primary font-semibold rounded uppercase bg-secondary py-2 px-6 text-white">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;