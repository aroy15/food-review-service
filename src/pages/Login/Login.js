import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import servicesBg from '../../assets/img/services-bg.webp'
import deliveryImg from '../../assets/img/food-delevery-free.jpg'
import gogoleIcon from '../../assets/img/google-icon.webp'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {loginWithGoogle} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = event => {

    }
    const handleGoogleLogin = () =>{
        loginWithGoogle(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err=>console.log(err))
    }
    return (
        <section className='text-center bg-no-repeat bg-cover bg-center py-28 min-h-screen flex items-center' style={{ backgroundImage: `url(${servicesBg})`, backgroundColor: '#212121' }}>
            <div className="container">
                <div className="flex flex-row items-center gap-6 lg:p-8 lg:bg-white sm:shadow rounded-md max-w-4xl w-full mx-auto">
                    <div className='w-1/2 hidden lg:flex items-center justify-center'>
                        <img src={deliveryImg} className="max-w-full rounded-md" alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 rounded py-12 px-8 shadow-md border border-gray-200 bg-white'>
                        <h2 className='uppercase text-4xl text-center pb-6'>Login</h2>
                        <form onSubmit={handleLogin} className='flex flex-col gap-5 mb-8'>
                            <input type="email" name="email" placeholder="Email" defaultValue='' className="input input-md h-12 rounded px-5 border  border-primary" required />
                            <input type="password" name="password" placeholder="Password" className="input input-md h-12 rounded px-5 border border-primary" required />
                            <input className='btn border-0 bg-secondary hover:bg-primary h-12 rounded px-5 col-span-full text-white uppercase font-bold' type="submit" value="Login" />
                        </form>
                        <button onClick={handleGoogleLogin} className='btn w-full border-2 border-secondary py-2 rounded px-5 col-span-full text-secondary hover:shadow-md uppercase font-bold flex gap-3 items-center justify-center'><img src={gogoleIcon} className="w-6" alt=""/>Login With Google</button>
                        <p className='pt-6'>New User? Please <Link className='text-secondary' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;