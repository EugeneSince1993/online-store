import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Filters, Sorting, ProductList } from '../../components';
import styles from './Home.module.scss';

export const Home = () => {

  return (
    <Row>
      <Col md={3}>
        <Filters />
      </Col>
      <Col md={9}>
        <Sorting />
        <ProductList />
      </Col>
    </Row>
  );
};
