import React, { Component, PropTypes } from 'react';
import { AppContainer } from 'react-hot-loader';
import { Layout, Breadcrumb, Icon } from 'antd';
import DemoButtonGroup from '../../components/DemoButtonGroup';
import Headers from '../Headers';
import Menus from '../Menus';
import Breadcrumbs from '../Breadcrumbs';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
const { Content, Sider } = Layout;
class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer>
         <Router>
          <Layout>
            <Headers />
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menus />
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumbs />
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Route exact path={'/'} component={DemoButtonGroup}/>
                </Content>
              </Layout>
           </Layout>
          </Layout>
        </Router>
      </AppContainer>
    );;
  }
}

export default Index;