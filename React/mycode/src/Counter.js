import React, { Component ,Fragment } from 'react'
import Child from './Child'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.state= {
            counter: 1
        }
    }
    handleBtnClick() {
        console.log(this.state.counter)
        const newCounter = this.state.counter + 1;
        // this.setState({
        //     counter: newCounter // 这里不用this
        // })
        this.setState(() =>{
            return {
                counter: newCounter
            }
        },() =>{
            console.log(this.state.counter)
        })


    }



    render() {
        // console.log('render');
        return (
            <Fragment>
                <button
                    onClick={this.handleBtnClick}
                    // ref={(buton) => {this.buttonElem = buton}}
                >增加</button>
                <div>{this.state.counter}</div>
                {/*<Child*/}
                    {/*number={this.state.counter}*/}
                    {/*ref={(Child) => {this.ChildElem = Child}}*/}
                {/*/>*/}
            </Fragment>
        )
    }
}
export default Counter
