import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import AppHeader from './components/Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Detail from './containers/Detail/'
import List from './containers/List/'
import 'antd/dist/antd.css'; // 引用antd中的样式
import './style.css'

const { Header, Footer, Content } = Layout;
ReactDOM.render(
    <BrowserRouter>
        <Layout style={{ minWidth: 1300 }}>
            <Header className="header">
                <AppHeader />
            </Header>
            <Content className="content">

                <Switch>
                    <Route path="/detail" component={Detail} />
                    <Route path="/:id?" component={List}/>
                </Switch>
            </Content>
            <Footer className="footer">@copyright GL 2019</Footer>
        </Layout>
    </BrowserRouter>,
  document.getElementById('root')
);

