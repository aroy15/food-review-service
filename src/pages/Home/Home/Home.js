import React from 'react';
import Banner from '../Banner/Banner';
import BannerBottomCards from '../BannerBottomCards/BannerBottomCards';
import ServicesSection from '../ServicesSection/ServicesSection';
import royal from '../../../assets/img/royal-king.jpg'

const Home = () => {

    return (
        <main>
            <Banner></Banner>            
            <BannerBottomCards></BannerBottomCards>
            <ServicesSection></ServicesSection>
            <section>
                <div className="container py-20">
                    <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                        <div className='w-full lg:w-1/2'>
                            <h3 className="text-secondary text-xl font-bold">Let's try</h3>
                            <h2 className='text-3xl font-bold'>Royal King Burger Set</h2>
                            <p className="text-bold">Kingburger + ice Cola + French fries</p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <img src={royal} className="w-full" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;