import React from 'react';
import styles from './ProductList.module.scss';
import { ProductItem } from '../ProductItem';
import iphone12Red from '../../assets/iphone-12-red.jpg';
import a52 from '../../assets/a52.jpeg';
import iphone13 from '../../assets/iphone-13.jpg';
import iphoneX from '../../assets/iphone-x.jpg';
import redmi9 from '../../assets/redmi-9.jpg';
import xiaomi11Lite from '../../assets/xiaomi-11-lite.jpg';

export const ProductList = () => {
  let arrItemsData = [
    {
      phoneImage: iphone12Red,
      rating: "4.8",
      testimonials: 6,
      productName: "Apple iPhone 12 64 Гб, красный",
      priceValue: 60000
    },
    {
      phoneImage: a52,
      rating: "4.0",
      testimonials: 4,
      productName: "Samsung Galaxy A52 32 Гб, белый",
      priceValue: 40000
    },
    {
      phoneImage: redmi9,
      rating: "4.5",
      testimonials: 9,
      productName: "Xiaomi Redmi 9 64 Гб, белый",
      priceValue: 45000
    },
    {
      phoneImage: xiaomi11Lite,
      rating: "4.3",
      testimonials: 10,
      productName: "Xiaomi 11 Lite 128 Гб, черный",
      priceValue: 45000
    },
    {
      phoneImage: iphone13,
      rating: "4.6",
      testimonials: 11,
      productName: "Apple iPhone 13 64 Гб, белый",
      priceValue: 80000
    },
    {
      phoneImage: iphone13,
      rating: "4.7",
      testimonials: 12,
      productName: "Apple iPhone 13 128 Гб, красный",
      priceValue: 100000
    },
    {
      phoneImage: iphoneX,
      rating: "4.0",
      testimonials: 12,
      productName: "Apple iPhone X 64 Гб, серебристый",
      priceValue: 30000
    },
    {
      phoneImage: iphoneX,
      rating: "4.2",
      testimonials: 15,
      productName: "Apple iPhone X 128 Гб, черный",
      priceValue: 35000
    }
  ];

  let arrItems = arrItemsData.map((item, index) => {
    return (
      <ProductItem 
        phoneImage={item.phoneImage}
        rating={item.rating}
        testimonials={item.testimonials}
        productName={item.productName}
        priceValue={item.priceValue}
        key={index}
      />
    );
  });

  return (
    <div className={styles.productList}>
      {arrItems}
    </div>
  );
};
