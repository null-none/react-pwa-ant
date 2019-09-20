import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Affix, BackTop, Button, Drawer, Icon, Layout,
} from 'antd';

const {
  Header, Footer,
} = Layout;

export default class GuestLayout extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { children } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <Layout>
          <div>
            <BackTop />
          </div>
          <Affix offsetTop={0}>
            <Header>
              <Link to="/">
                <span style={{ color: '#fff' }}>
                  <strong>React + PWA + Ant</strong>
                </span>
              </Link>
              <Button type="primary" shape="circle" onClick={this.showDrawer}>
                <Icon type="bars" theme="outlined" />
              </Button>
              <Drawer
                title="Menu"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={visible}
              >
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About</Link></p>
              </Drawer>
            </Header>
          </Affix>
          { children }
          <Footer>
            This is an example of implementation of Ant Design with React and PWA.
          </Footer>
        </Layout>
      </div>
    );
  }
}
