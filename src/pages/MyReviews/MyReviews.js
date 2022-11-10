import { Button, Modal, Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import BannerGlobal from '../Shared/BannerGlobal/BannerGlobal';
import MyReviewCard from './MyReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user, logOut } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    // Edit
    // useEffect(() => {
    //     fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    //         .then(res => {
    //             setLoading(true)
    //             return res.json()
    //         })
    //         .then(data => {
    //             setReviews(data)
    //             setLoading(false)
    //         })
    //         .catch(err => console.log(err))
    // }, [user?.email])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('food-token')}`
            }
        })
            .then(res => {
                setLoading(true)
                if(res.status === 401 || res.status === 403){
                  return  logOut()
                }
                return res.json()
            })
            .then(data => {
                // console.log(data)
                setLoading(false)
                return setReviews(data)
            })
            .catch(err => console.log(err))
    }, [user?.email, logOut])

    // Delete
    const handleDeleteReview = (_id) => {
        const proceed = window.confirm('Are you sure, you want delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount>0){
                        toast.success(`Deleted Successfully 😃`,{
                            position: "top-center",
                            toastId: `option-${_id}`
                        })
                        const remainingReviews = reviews.filter(review=> review._id !== _id);
                        setReviews(remainingReviews);
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <BannerGlobal title='My Reviews'></BannerGlobal>
            <section className='py-20'>
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        {
                            loading ? <Spinner color="failure" aria-label="Failure spinner example" />
                                :
                                <>
                                    {
                                        reviews.length < 1 ? <h2 className='text-secondary text-center text-4xl'>No reviews were added</h2>
                                        :
                                        reviews.map(review => <MyReviewCard
                                            key={review._id}
                                            review={review}
                                            handleDeleteReview={handleDeleteReview}
                                        ></MyReviewCard>)
                                    }
                                </>
                        }
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </section>


        </>
    );
};

export default MyReviews;