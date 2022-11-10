import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerGlobal from '../Shared/BannerGlobal/BannerGlobal';

const Blogs = () => {
    const blogsContent = useLoaderData()
    return (
        <>
            <BannerGlobal title="Blogs"></BannerGlobal>

            <section className='py-16'>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            blogsContent.map(blog=><div                             
                            key={blog._id}
                            className='shadow-md p-5 rounded-md border border-gray-200'
                            >
                                <h3 className='text-2xl uppercase mb-5'>{blog.title}</h3>
                                <p>{blog.content}</p>

                            </div>)
                        }
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default Blogs;