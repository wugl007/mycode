import React, { Component, Fragment } from 'react';
import { Menu} from 'antd';
import { WechatOutlined} from '@ant-design/icons';
import axios from 'axios'
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './style.css';

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    getMenuItems () {
        return this.state.list.map((item)=>{
            return (
                <Menu.Item key={item.id}
                           icon={<WechatOutlined />}>
                    <Link to={`/${item.id}`} >
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
    }
    componentDidMount () {
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then((res)=>{
                this.setState({
                    list:res.data.data
                })
            })
    }
    render() {
        return (
          <Fragment>
              <img src={logo} className='app-header-logo' alt='logo'/>
              <Menu  mode="horizontal" >
                  {this.getMenuItems()}
              </Menu>
          </Fragment>
        );
    }

}

export default AppHeader
