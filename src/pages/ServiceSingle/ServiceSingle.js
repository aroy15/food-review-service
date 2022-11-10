import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import BannerBottomCards from '../Home/BannerBottomCards/BannerBottomCards';
import BannerGlobal from '../Shared/BannerGlobal/BannerGlobal';
import ReviewCard from '../Shared/ReviewCard/ReviewCard';

const ServiceSingle = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');
    const service = useLoaderData()
    const { serviceName, serviceDetails, image, price, rating, _id } = service;
    const { user, setLoading, loading } = useContext(AuthContext);

    const handleAddReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const message = form.message.value;
        setError('')
        const reviewData = {
            serviceId:_id,
            name,
            email,
            photoURL,
            rating,
            message,
            date:new Date().toISOString()
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => {
                setLoading(true)
              return  res.json()
            })
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                }
                setLoading(false)
            })
            .catch(err => setError(err.message))
    }
    
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?id=${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => setError(err.message))
    },[_id])

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
                    <div className='max-w-4xl w-full mx-auto bg-gray-200 p-6 rounded-md'>
                        {/* Add Review section */}

                        {
                            user &&
                            <>
                                <h2 className='text-4xl pb-6 uppercase'>Please Add a Review</h2>
                                <form onSubmit={handleAddReview} className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-12'>
                                    <input type="text" name="name" placeholder="Your Name" defaultValue={user?.displayName} className="input input-md h-14 rounded px-5" required readOnly />
                                    <input type="email" name="email" placeholder="Your Email" defaultValue={user?.email} className="input input-md h-14 rounded px-5" required readOnly />
                                    <input type="url" name="photoURL" placeholder="Photo URL" defaultValue={user?.photoURL} className="input input-md h-14 rounded px-5" required readOnly />
                                    <input type="number" name="rating" placeholder="Rating Out of 5" min='1' max='5' className="input input-md h-14 rounded px-5" required />
                                    <textarea name="message" className="textarea col-span-full h-32 pt-6 px-5 rounded" placeholder="Write your review" required></textarea>
                                    <input className='btn border-0 bg-secondary hover:bg-primary h-14 rounded px-5 col-span-full text-white uppercase font-bold' type="submit" value="Submit Review" />
                                </form>
                                {error && <p className='pt-6 text-red-600'>{error}</p>}
                            </>
                        }

                        {/* Ratings  section*/}
                        <h2 className='text-4xl pb-6 uppercase'>Reviews of this service:</h2>
                        <div className='flex flex-col gap-6'>
                            {
                                reviews.map(review => <ReviewCard 
                                    key={review._id}
                                    review={review}
                                ></ReviewCard>)
                            }
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ServiceSingle;