import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import styles from './ProductList.module.scss';
import { ProductItem } from '../ProductItem';

export const ProductList = () => {
  const [devicesSrc, setDevicesSrc] = useState([]);

  useEffect(() => {
    axios
      .get('/devices')
      .then((res) => {
        setDevicesSrc(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  console.log(devicesSrc);

  let devices = devicesSrc.map((item, index) => {
    return (
      <ProductItem 
        productId={item.id}
        phoneImage={item.imageUrl}
        rating={item.rating}
        testimonials={item.testimonials}
        productName={item.name}
        priceValue={item.price}
        key={index}
      />
    );
  });

  return (
    <div className={styles.productList}>
      {devices}
    </div>
  );
};
