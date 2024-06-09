import React from 'react';
import iphone from '../../../assets/images/iphone.jpg';
import Samsung from '../../../assets/images/Samsung.jpg';
import Vivo from '../../../assets/images/Vivo.jpg';
import ProductCategory from './ProductCategory';


const ProductCategories = () => {

    const cardData = [
        {
            id: 1,
            name: 'iphone',
            productsCount: 3,
            img: iphone,
        },
        {
            id: 2,
            name: 'Samsung Smartphone',
            productsCount: 3,
            img: Samsung,
        },
        {
            id: 3,
            name: 'Vivo Smartphone',
            productsCount: 3,
            img: Vivo,
        }
    ]

    return (
        
        <div className='my-5'>
            <div className="flex flex-col w-full border-opacity-50">
  <div className="divider font-bold">BROWSE OUR CATEGORIES</div>
</div>
            <div className='mt-5 grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                cardData.map(card => <ProductCategory
                    key={card.id}
                    card={card}
                >  
                </ProductCategory>)
            }
        </div>
        </div>
    );
};

export default ProductCategories;