import React, { Component, Fragment } from 'react' // 从react中声明React变量，Component方法以及Fragment占位符
import Todoitem from './Todoitem'
import './style.css'

class Todolist extends Component { // Todolist继承Component基件
    // constructor 在组件创建的第一时刻自动被执行
    constructor (props) {
        super (props); // 固定写法 props super this.state
        this.handleInputChange = this.handleInputChange.bind(this) // 将.bind方法提前
        this.handleKeyUP = this.handleKeyUP.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)

        // 在组件中创建了两个数据 ，数据一定要写在state中
        this.state = { // this.state里面放置声明变量
            inputValue: '',
            list: []
        }
    }

    handleInputChange (e) {
        this.setState ({ // 改变state中的属性必要要使用this.setState方法
            inputValue: e.target.value //注意：跟不用this
        })
    }

    handleKeyUP (e) {
        if(e.keyCode === 13 && e.target.value !== '') { // 键盘按下回车键
            const list = [...this.state.list, this.state.inputValue] //利用ES6数组拓展符赋值原list的值，同时加入inputValue新输入的值
            this.setState({
                list, // ES6中键值相同，可省略
                inputValue: ''
            })
        }
    }

    handleItemClick (index) {
        const list = [...this.state.list]
        list.splice(index,1) // 删除index开始的一个数据
        this.setState({
            list
        })
    }

    //  循环方法
    getlistItems () {
      return  this.state.list.map((value, index) => {  // 在ul里面插入一个循环map方法 这里的return不能省略，而且花括号可以去除
         return (
             <Todoitem
              key={index}
              content={value}
              index={index}
              deleteFunction={this.handleItemClick}
         />)

            // return ( 原数据
            //     <li
            //         key={index}
            //         onClick={this.handleItemClick.bind(this, index)}
            //         dangerouslySetInnerHTML={{__html: value}}
            //     ></li>)
        })
    }

    render () {
        return (  /*return不能少了*/
            <Fragment>
                <label htmlFor="input">请输出内容：</label>
                <input
                        id='input'
                        className='input'
                        value={this.state.inputValue} /*JSX语法 引用声明变量必须包裹花括号{}*/
                       onChange={this.handleInputChange}  /*添加一个方法并改变this指向 注意=后加{}*/
                        onKeyUp={this.handleKeyUP}
                />
                <ul>
                    {this.getlistItems()} {/*引用循环方法*/}
                </ul>
            </Fragment>
        );
    }
}

export default Todolist; // 暴露Todolist 组件
