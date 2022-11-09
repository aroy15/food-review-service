import React from 'react';
import profilePlaceholder from '../../../assets/img/profile-placeholder.webp'

const ReviewCard = () => {
    return (
        <div className='bg-white p-4 rounded-md shadow-md border border-gray-200 text-center sm:text-left'>
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-4">
                <img className="w-12 h-12 mx-auto  sm:mx-0 rounded-full" src={profilePlaceholder} alt="" />
                <div className="space-y-1 font-medium">
                    <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Reviewed on August 2014</time></p>
                </div>
            </div>
            <p className="mb-2 font-light text-gray-500">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
        </div>
    );
};

export default ReviewCard;