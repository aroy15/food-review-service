import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import servicesBg from '../../assets/img/services-bg.webp'

const UpdateReview = () => {
    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview);
    const { rating, message, image, serviceName } = review;
    const [error, setError] = useState('');

    const handleUpdateReview = event => {
        event.preventDefault();

        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                return setReview(data)
            })
            .catch(err => setError(err))
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }
    return (

        <section className='text-center bg-no-repeat bg-cover bg-center py-28 min-h-screen flex items-center' style={{ backgroundImage: `url(${servicesBg})`, backgroundColor: '#212121' }}>
            <div className="container">
                <div className="flex flex-row items-center gap-6 lg:p-8 lg:bg-white sm:shadow rounded-md max-w-5xl w-full mx-auto">
                    <div className='w-2/5 hidden lg:flex flex-col justify-center items-center text-center'>
                        <h3 className='text-3xl pb-5'> {serviceName && serviceName}</h3>
                        {image && <img src={image} className="w-full h-80 object-cover  rounded-md" alt="" />}
                    </div>
                    <div className='w-full lg:w-3/5 rounded py-12 px-8 shadow-md border border-gray-200 bg-white'>
                        <h2 className='text-4xl text-center pb-6'>Update Review</h2>
                        <form onSubmit={handleUpdateReview} className='flex flex-col gap-5'>
                            <input onChange={handleInputChange} type="number" name="rating" defaultValue={rating} placeholder="Rating of 5" min='1' max='5' className="input input-md h-12 rounded px-5 border  border-primary" required />
                            <textarea onChange={handleInputChange} name="message" placeholder='Review content' className='"input input-md h-32 rounded px-5 pt-3 border  border-primary'>{message}</textarea>
                            <input className='btn border-0 bg-secondary hover:bg-primary h-12 rounded px-5 col-span-full text-white uppercase font-bold' type="submit" value="Submit" />
                        </form>
                        {
                            error && <p className='pt-6 text-red-500'>{error}</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateReview;