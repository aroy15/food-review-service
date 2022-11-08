import React from 'react';

const BannerBottomCards = () => {
    return (
        <section className='bg-primary text-white text-center md:text-left py-4'>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='px-4 py-2 flex flex-col items-center'>
                        <div>
                            <h3 className='text-xl uppercase'>Free Delivery</h3>
                            <h4 className='text-black text-2xl uppercase'>During 30 min</h4>
                        </div>
                    </div>
                    <div className='px-4 py-2 flex flex-col items-center md:border-x border-white'>
                        <div>
                            <h3 className='text-xl uppercase'>Hot Food</h3>
                            <h4 className='text-black text-2xl uppercase'>FRESHLY COOKED</h4>
                        </div>
                    </div>
                    <div className='px-4 py-2 flex flex-col items-center'>
                        <div>
                            <h3 className='text-xl uppercase'>24 Hours</h3>
                            <h4 className='text-black text-2xl uppercase'>FOOD DELIVERY</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerBottomCards;