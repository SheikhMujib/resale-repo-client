import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import TipsAndTricks from '../TipsAndTricks/TipsAndTricks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <TipsAndTricks></TipsAndTricks>
        </div>
    );
};

export default Home;