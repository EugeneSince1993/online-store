import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { useParams } from 'react-router-dom';
import styles from './Product.module.scss';

export const Product = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/devices/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  console.log(data);
  // need to fix the issue - render component (blocks) only when data from api has come

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <img src={data.imageUrl} />
      </div>
      <div className={styles.mainData}>

      </div>
    </div>
  );
};
