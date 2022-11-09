import React from 'react';
import { Link } from 'react-router-dom';
import servicesBg from '../../assets/img/services-bg.webp'
import deliveryImg from '../../assets/img/food-delevery-free.jpg'

const Signup = () => {
    const handleSignup = event => {

    }
    return (
        <section className='text-center bg-no-repeat bg-cover bg-center py-28 min-h-screen flex items-center' style={{ backgroundImage: `url(${servicesBg})`, backgroundColor: '#212121' }}>
            <div className="container">
                <div className="flex flex-row items-center gap-6 lg:p-8 lg:bg-white sm:shadow rounded-md max-w-5xl w-full mx-auto">
                    <div className='w-1/2 hidden lg:flex items-center justify-center'>
                        <img src={deliveryImg} className="max-w-full rounded-md" alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 rounded py-12 px-8 shadow-md border border-gray-200 bg-white'>
                        <h2 className='uppercase text-4xl text-center pb-6'>Sign Up</h2>
                        <form onSubmit={handleSignup} className='flex flex-col gap-5'>
                            <input type="text" name="name" placeholder="Full Name" className="input input-md h-12 rounded px-5 border  border-primary" required />
                            <input type="email" name="email" placeholder="Email" className="input input-md h-12 rounded px-5 border  border-primary" required />
                            <input type="url" name="photoURL" placeholder="Photo URL" className="input input-md h-12 rounded px-5 border  border-primary" required />
                            <input type="password" name="password" placeholder="Password" className="input input-md h-12 rounded px-5 border border-primary" required />
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-md h-12 rounded px-5 border border-primary" required />
                            <input className='btn border-0 bg-secondary hover:bg-primary h-12 rounded px-5 col-span-full text-white uppercase font-bold' type="submit" value="Sign Up" />
                        </form>
                        <p className='pt-6'>Already Registered? Please <Link className='text-secondary' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;