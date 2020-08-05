import React, { Component } from 'react'
import { Card } from 'antd';
import axios from 'axios'
import './style.css'
class PageDetail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get("http://www.dell-lee.com/react/api/detail.json?id="+id)
            .then(res=>{
                const data = res.data.data
                this.setState(data) // 精简写法
            })
    }

    render() {
        return (
            <Card title={this.state.title}>
                <div className="detail img" dangerouslySetInnerHTML={{__html: this.state.content}}
                ></div>
            </Card>
        );
    }
}

export default PageDetail
