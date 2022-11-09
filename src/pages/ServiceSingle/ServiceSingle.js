import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerBottomCards from '../Home/BannerBottomCards/BannerBottomCards';
import BannerGlobal from '../Shared/BannerGlobal/BannerGlobal';
import ReviewCard from '../Shared/ReviewCard/ReviewCard';

const ServiceSingle = () => {
    const service = useLoaderData()
    const { serviceName, serviceDetails, image, price, rating, _id } = service;

    const handleAddReview = event => {
        const form = event.target;

    }

    return (
        <>
            <BannerGlobal title={serviceName}></BannerGlobal>
            <BannerBottomCards></BannerBottomCards>
            <section className='pt-20 pb-16'>
                <div className="container">
                    <div className='max-w-4xl w-full mx-auto'>
                        <img className='w-full rounded' src={image} alt={serviceName} />
                        <h2 className='text-4xl py-8 uppercase'>{serviceName}</h2>
                        <div className='text-2xl color-primary font-bold pb-8 flex gap-8'>
                            <p>Price: <span className='text-primary'>${price}</span></p>
                            <p>Rating: <span className='text-yellow-500'>{rating}</span></p>
                        </div>
                        <p>{serviceDetails}</p>
                    </div>
                </div>
            </section>
            <section className='pb-20'>
                <div className="container">
                    <div className='max-w-4xl w-full mx-auto bg-gray-200 p-6'>
                        {/* Add Review section */}
                        <h2 className='text-4xl pb-6 uppercase'>Please Add a Review</h2>
                        <form onSubmit={handleAddReview} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <input type="text" name="name" placeholder="Your Name" className="input input-md h-14 rounded px-5" required />
                            <input type="email" name="email" placeholder="Your Email" defaultValue='' className="input input-md h-14 rounded px-5" />
                            <input type="url" name="photoURl" placeholder="Photo URL" className="input input-md h-14 rounded px-5" required />
                            <input type="number" name="rating" placeholder="Rating Out of 5" min='1' max='5' className="input input-md h-14 rounded px-5" required />
                            <textarea name="message" className="textarea col-span-full h-32 pt-6 px-5 rounded" placeholder="Write you review" required></textarea>
                            <input className='btn border-0 bg-secondary hover:bg-primary h-16 rounded px-5 col-span-full text-white uppercase font-bold' type="submit" value="Submit Review" />
                        </form>
                        
                        {/* Ratings  section*/}
                        <h2 className='text-4xl pt-12 pb-6 uppercase'>Reviews of this service:</h2>
                        <div className='flex flex-col gap-6'>
                            <ReviewCard></ReviewCard>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ServiceSingle;