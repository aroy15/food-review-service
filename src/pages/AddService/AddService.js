import React, { useState } from 'react';

import servicesBg from '../../assets/img/services-bg.webp'

const AddService = () => {
    const [error, setError] = useState('')
    const handleSubmitService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const image = form.image.value;
        const serviceDetails = form.serviceDetails.value;
        setError('')

        const service = {
            serviceName,
            price,
            image,
            serviceDetails,
            date: new Date().toISOString()
        }

        fetch('http://localhost:5000/services/', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => setError(err))
    }

    return (
        <>
            <section className='text-center bg-no-repeat bg-cover bg-center py-28 min-h-screen flex items-center' style={{ backgroundImage: `url(${servicesBg})`, backgroundColor: '#212121' }}>
                <div className="container">
                    <div className="flex flex-row items-center gap-6 lg:p-8 lg:bg-white sm:shadow rounded-md max-w-5xl w-full mx-auto">
                        <div className='w-full rounded py-12 px-8 shadow-md border border-gray-200 bg-white'>
                            <h2 className='uppercase text-4xl text-center pb-10'>Add a Service</h2>
                            <form onSubmit={handleSubmitService} className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-12'>
                                <input type="text" name="serviceName" placeholder="Service Name"  className="input input-md h-12 rounded px-5 border  border-primary" required />
                                <input type="number" name="price" placeholder="Set Price"  className="input input-md h-12 rounded px-5 border  border-primary" required />
                                <input type="url" name="image" placeholder="Enter Service Image URL"  className="col-span-full input input-md h-12 rounded px-5 border  border-primary" required />
                                <textarea name="serviceDetails" className="textarea col-span-full h-32 pt-6 px-5 rounded border  border-primary" placeholder="Write Service Details" required></textarea>
                                <input className='btn border-0 bg-secondary hover:bg-primary h-14 rounded px-5 col-span-full text-white uppercase font-bold' type="submit" value="Submit Service" />
                            </form>
                            {
                                error && <p className='pt-6 text-red-500'>{error}</p>
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AddService;