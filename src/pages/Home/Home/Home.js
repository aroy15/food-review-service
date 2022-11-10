import React from 'react';
import Banner from '../Banner/Banner';
import BannerBottomCards from '../BannerBottomCards/BannerBottomCards';
import ServicesSection from '../ServicesSection/ServicesSection';

const Home = () => {

    return (
        <main>
            <Banner></Banner>            
            <BannerBottomCards></BannerBottomCards>
            <ServicesSection></ServicesSection>
        </main>
    );
};

export default Home;