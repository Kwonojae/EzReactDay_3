import React, { Component } from 'react';
import Test1Sub from './Test1Sub';

class Test1 extends Component {
    state = {
        data :  [
            {no:1, name:'홍길동', age:20, done:false},
            {no:2, name:'강호동', age:5, done:true},
            {no:3, name:'김철수', age:15, done:false},
            {no:4, name:'짱구', age:8, done:true},
            {no:5, name:'맹구', age:5, done:false},   
        ]
    }

    handleRemove = (num) =>{
        this.setState({
                data : this.state.data.filter( item => item.no !== num )
                
        })
    }

    handelModify1 = (num) => {
        this.setState({
            data : this.state.data.map(item => {
                if(item.no === num) {
                    return {
                        ...item,
                        name:'에어팟',
                        age:70,
                        done:false
                    }
                }else {
                    return item
                }
            })
        })
    };

    handelModify2 = (num) => {
        const {data} = this.state
        this.setState({
            data : data.map(item => item.no === num ? 
                {...item, // 해당하는 item값 가져옴 수정 하는 부분 
                    name:'이수근',
                    age:40,
                    done:true 
                }:item) //다르면 원래값 나옴
        })
    }
    


    handleAdd1 = () => {
        this.setState({
            data : this.state.data.concat({no:7,name:'화사',age:22, done:true})
        })
    }

    handleAdd2 = () => {
        this.setState({
            data: this.state.data.concat({no:8,name:'누구추가',age:26, done:true})
        })
    }


    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map( item => <li key={item.no}>
                            {item.no} / {item.name} / {item.age} / {item.done === true? '이상':'이하'}
                        </li>)
                    }
                </ul>
                <p>
                    <button onClick={this.handleAdd1}>추가1</button>
                    <button onClick={this.handleAdd2}>추가2</button>
                    <hr/>
                    <Test1Sub
                        onRemove = {this.handleRemove}
                        onModify1 = {this.handelModify1}
                        onModify2 = {this.handelModify2}
                    />
                </p>
            </div>
        );
    }
}

export default Test1;