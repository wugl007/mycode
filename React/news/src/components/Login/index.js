import React, { Component } from 'react';
import { Button, Modal, Input,message } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './sytle.css'
class Login extends Component{
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this); // 要写在state中
        this.checkLogin = this.checkLogin.bind(this);
        this.hiddenModal = this.hiddenModal.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.KeyUp = this.KeyUp.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            modal: false,
            login: false,
            user: '',
            password: ''

        };

    }

    showModal () {
       this.setState({
           modal: true
       })
    }

    hiddenModal() {
        this.setState({
            modal: false
        })
    }

    checkLogin() {  // 将输入的内容发送到axios中进行判定并获取判定结果
       const { user, password } = this.state;
       const url = `http://www.dell-lee.com/react/api/login.json?user=${user}&&password=${password}`;
        axios.get(url, {
            withCredentials: true  // 将登录状态保存发给后台
        }).then(res=>{
            const login = res.data.data.login;
            if(login){
                message.success('登陆成功');
                this.setState({
                    login: true,
                    modal: false
                })
            }else {
                message.error('登陆失败')
            }
        })
    }

    logout() {
        axios.get('http://www.dell-lee.com/react/api/logout.json', {
            withCredentials: true
        })
            .then(res => {
                const data = res.data.data;
                if (data.logout) {
                    this.setState({
                        login: false
                    });
                }
                this.props.history.push('/'); // 通过withRouter返回首页
            })
    }

    KeyUp(e) {
        if(e.keyCode ===13){
            this.checkLogin() // 增加一个键盘判定
        }
    }

    changeUser(e){
          this.setState({
              user: e.target.value  // 将输入的内容传给user
          })
    }

    changePassword(e) {
        this.setState({
            password: e.target.value  // 将输入的内容传给password
        })
    }



    render() {
        const { login } = this.state
        return (
            <div className="login">
                {
                  login?
                      <Button
                          type="primary"
                          onClick={this.logout}
                      >退出
                      </Button>:
                      <Button type="primary"
                              onClick={this.showModal}
                      >登录
                      </Button>
                }
                <Link to='/vip'>
                    <Button
                        type="primary"
                        style={{ marginLeft: 10 }}
                    >
                        Vip
                    </Button>
                </Link>
                        <Modal
                            title="Login"
                            visible={this.state.modal}
                            onOk={this.checkLogin}
                            onCancel={this.hiddenModal}
                        >
                            <Input
                                placeholder="请输入用户名"
                                style={{marginBottom: 10}}
                                value={this.state.user}
                                onChange={this.changeUser}
                            />
                            <Input
                                type="password"
                                placeholder="请输入密码"
                                value={this.state.password}
                                onChange={this.changePassword}
                                onKeyUp={this.KeyUp}
                            />
                        </Modal>
            </div>
        );
    }
    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/isLogin.json', {
            withCredentials: true
        }) // 获取axios中的判断结果
            .then(res=>{
                const login = res.data.data.login;
                this.setState({login})
            })
    }
}

export default withRouter(Login); // 使用withRouter包裹组件
