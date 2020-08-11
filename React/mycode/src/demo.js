import React, { Component } from 'react'
import { Button } from 'antd';

class Demo extends Component{
    render () {
        return (
            <Button
                type="primary"
                style={{
                    margin:10
                }}
            >Primary Button</Button>
        )
    }
}
export default Demo
