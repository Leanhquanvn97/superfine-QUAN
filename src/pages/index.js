import * as React from 'react';
import Header from '../components/Header/Header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './root.scss';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import GameCards from '../components/GameCards/GameCards';

const IndexPage = () => {
    return (
        <>
            <Header/>
            <main>
                <HeroBanner/>
                <GameCards isJam/>
                <GameCards/>
            </main>
        </>
    );
};

export default IndexPage;

export const Head = () => {
    return (
        <>
            <meta name="x-robots-tag" content="all" />
            <meta name="description" content="My page" />
            <title>Home</title>
        </>
    );
};
