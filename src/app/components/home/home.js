import React from 'react';
import {
  Layout, Row, Col,
} from 'antd';
import GuestLayout from '../layout/guest-layout';

const {
  Content,
} = Layout;

const Home = () => (
  <GuestLayout>
    <Content>
        <Row gutter={48} type="flex">
          <Col md={{ span: 16 }} sm={{ span: 24 }}>
            <h3>Home</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&#39;s standard dummy text ever since&nbsp;
              the 1500s, when an unknown printer took a galley of type and scrambled it&nbsp;
              to make a type specimen book.
            </p>
          </Col>
          <Col md={{ span: 8 }} sm={{ span: 24 }}>
          </Col>
        </Row>
    </Content>
  </GuestLayout>
);

export default Home;
