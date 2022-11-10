import React from 'react';
import profilePlaceholder from '../../../assets/img/profile-placeholder.webp'

const ReviewCard = ({review}) => {
    const { serviceId,name,email,photoURL,rating,message,date } = review;
    return (
        <div className='bg-white p-4 rounded-md shadow-md border border-gray-200 text-center sm:text-left'>
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-4">
                <img className="w-12 h-12 mx-auto  sm:mx-0 rounded-full" src={photoURL} alt="" />
                <div className="space-y-1 font-medium">
                    <p>{name} <time className="block text-sm text-gray-500 dark:text-gray-400">Reviewed on {date.substring(0, 10)}</time></p>
                </div>
            </div>
            <p className="mb-2 font-light text-gray-500">{message}</p>
            <p className='pt-2 italic'>Rating: <span className='text-yellow-500 font-semibold'>{rating}</span></p>
        </div>
    );
};

export default ReviewCard;