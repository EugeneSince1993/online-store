import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from 'classnames';

import styles from './Footer.module.scss';

export const Footer = () => {

  return (
    <div className="bg-light">
      <Container>
        <Row className={classNames(styles.footerRow1, 'pt-3')}>
          <Col md={3}>
            <h5>Покупателям</h5>
            <ul>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Партнерам</h5>
            <ul>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Компания</h5>
            <ul>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Мы в соцсетях</h5>
            <ul>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="pb-3">
          <Container>
            <div className="text-center">2022 &copy; Online store</div>
          </Container>
        </Row>
      </Container>
    </div>
  );
};
