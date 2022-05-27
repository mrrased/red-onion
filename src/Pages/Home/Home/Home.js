import React from 'react';
import ChooseTsFood from '../../Shared/ChooseTsFood/ChooseTsFood';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopBanner from '../../Shared/TopBanner/TopBanner';
import MenuBar from '../MenuBar/MenuBar/MenuBar';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <MenuBar></MenuBar>
            <ChooseTsFood></ChooseTsFood>
            <Footer></Footer>
        </div>
    );
};

export default Home;