import React, { Component } from 'react';

class Test4 extends Component {
    state = {
        count : 0
    }

    increment1  = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement1 = () => {
        this.setState({
            count : this.state.count - 1
        })
    }
    increment2  = () => {
        this.setState({
            count : this.state.count + 1
        }) 
        this.setState({
            count : this.state.count + 1
        }) //이거 안됨 동시에 처리가 안됨
        
    }

    decrement2 = () => {
        this.setState({
            count : this.state.count - 2
        })
    }

    increment3 = () => {
        this.setState((prevState,props)=>{
            return ({
                count : prevState.count + 1
            })
        })
        this.setState(prevState => {
            return {
                count : prevState.count + 1
            }
        })
        // this.setState((이전state,props)=>{
        //     return ({
        //         키: 값
        //     })
        // })
    }
    decrement3 = () => {
        this.setState( state => {
            return {
                count :state.count -1
            }
        })
        this.setState ( state => {
            return {
                count : this.state.count -1
            }
        })
    }

    increment4 = () =>{
        this.setState({
            count : this.state.count + 1
        },() => this.setState({
            count : this.state.count + 1
        },()=> this.setState({
            count : this.state.count + 1
        },()=> this.setState ({
            count : this.state.count + 1
        }))));
    }
    decrement4 = () =>{
        this.setState({
            count : this.state.count -1
        },() => this.setState({
            count:this.state.count - 1
        },() => this.setState({
            count : this.state.count -1
        },() => this.setState({
            count : this.state.count -1
        }))));
    }

    increment5 = () => {
        for (let i = 0; i<5; i++){
            this.setState(state => {
                return {
                    count : state.count + 1
                }
            })
        }
    }

    decrement5 = () => {
        for (let i=0; i<5; i++){
            this.setState(state => {
                return{
                    count : state.count - 1
                }
            })
        }
    }

    render() {
        return (
            <div>
                <h2>count : {this.state.count}</h2>
                <p>
                    <button onClick={this.increment1}>1씩 증가</button>
                    <button onClick={this.decrement1}>1씩 감소</button>
                </p>
                <p>
                    <button onClick={this.increment2}>2씩 증가</button>
                    <button onClick={this.decrement2}>2씩 감소</button>
                </p>
                <p>
                    <button onClick={this.increment3}>3씩 증가</button>
                    <button onClick={this.decrement3}>3씩 감소</button>
                </p>
                <p>
                    <button onClick={this.increment4}>4씩 증가</button>
                    <button onClick={this.decrement4}>4씩 감소</button>
                </p>
                <p>
                    <button onClick={this.increment5}>5씩 증가</button>
                    <button onClick={this.decrement5}>5씩 감소</button>
                </p>
            </div>
        );
    }
}

export default Test4;           