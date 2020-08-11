import React, {Component} from 'react'

class Todoitem extends Component {
    constructor (props) {
        super(props)
        this.handleItemClick = this.handleItemClick.bind(this) //改变this指向
    }
    handleItemClick () {
        const {deleteFunction, index} = this.props
        deleteFunction(index) // 使用父组件传来的方法
    }
    render() {
        const {content} = this.props
        return (
            <li
                onClick={this.handleItemClick}>{content}</li>
        );
    }
}
export default Todoitem
