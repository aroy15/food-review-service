import React from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ review }) => {
    const { _id, name, email, photoURL, rating, message, date } = review;
    return (
        <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col justify-between bg-white rounded-md shadow-md border border-gray-200 text-center sm:text-left overflow-hidden'>
            <div className='p-4'>
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-4">
                    <img className="w-12 h-12 mx-auto  sm:mx-0 rounded-full" src={photoURL} alt="" />
                    <div className="space-y-1 font-medium">
                        <p>{name} <time className="block text-sm text-gray-500 dark:text-gray-400">Reviewed on {date.substring(0, 10)}</time></p>
                    </div>
                </div>
                <p className="mb-2 font-light text-gray-500">{message}</p>
                <p className='pt-2 italic'>Rating: <span className='text-yellow-500 font-semibold'>{rating}</span></p>
            </div>
            <div className='pt-2 flex'>
                <Link to={`/my-reviews/${_id}`} className='flex gap-3 items-center justify-center w-1/2 bg-secondary hover:bg-primary text-white p-2 uppercase font-semibold border-r-2 border-red-300'>Edit <FaRegEdit /></Link>
                <button className='flex gap-3 items-center justify-center w-1/2 bg-secondary hover:bg-primary text-white p-2 uppercase font-semibold border-0'>Delete <FaTrashAlt /></button>
            </div>
        </div>
    );
};

export default MyReviewCard;