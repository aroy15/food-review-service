import { Button, Modal, Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import BannerGlobal from '../Shared/BannerGlobal/BannerGlobal';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => {
                setLoading(true)
                return res.json()
            })
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [user?.email])

    return (
        <>
            <BannerGlobal title='My All Reviews'></BannerGlobal>
            <section className='pt-20'>
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        {
                            loading ? <Spinner color="failure" aria-label="Failure spinner example" />
                                :
                                <>
                                    {
                                        reviews.map(review => <MyReviewCard
                                            key={review._id}
                                            review={review}
                                        ></MyReviewCard>)
                                    }
                                </>
                        }


                    </div>
                </div>
            </section>

            
        </>
    );
};

export default MyReviews;