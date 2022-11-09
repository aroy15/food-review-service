import React from 'react';
import BannerGlobal from '../Shared/BannerGlobal/BannerGlobal';
import ReviewCard from '../Shared/ReviewCard/ReviewCard';

const MyReviews = () => {
    return (
        <>
            <BannerGlobal title='My All Reviews'></BannerGlobal>
            <section className='pt-20'>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                        <ReviewCard></ReviewCard>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyReviews;