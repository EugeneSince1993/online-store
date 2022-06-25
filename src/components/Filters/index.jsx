import React from 'react';
import classNames from 'classnames';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

import styles from './Filters.module.scss';

export const Filters = () => {

  return (
    <Form className={styles.filterForm}>
      <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
        <Accordion.Item eventKey="0" className={classNames(styles.filterBrand, 'mb-3')}>
          <Accordion.Header>
            <h6>Бренд</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className={styles.filterBrandList}>
              <Form.Check type='checkbox' label='Xiaomi' />
              <Form.Check type='checkbox' label='Redmi' />
              <Form.Check type='checkbox' label='Huawei' />
              <Form.Check type='checkbox' label='Samsung' />
              <Form.Check type='checkbox' label='Apple' />
              <Form.Check type='checkbox' label='Google' />
              <Form.Check type='checkbox' label='Honor' />
              <Form.Check type='checkbox' label='Realme' />
              <Form.Check type='checkbox' label='Nokia' />
              <Form.Check type='checkbox' label='POCO' />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className={classNames(styles.filterPrice, 'mb-3')}>
          <Accordion.Header>
            <h6>Цена</h6>
          </Accordion.Header>
          <Accordion.Body>
            <div className='d-flex'>
              <Form.Control className="d-inline-block me-1" type="number" placeholder="от 3000" />
              <Form.Control className="d-inline-block ms-1" type="number" placeholder="до 150000" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Form>
  );
};
