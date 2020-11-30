import React, { Component } from 'react';

class Test5 extends Component {
    //고유 번호는 state설정안해도된다
    no = 1;
    id = 1;

    state = {
        data1:[],
        data2:[],
        data3:[],
        data4:[],
    }

    handleAdd1 = () => {
        //데이터추가 concat
        this.setState({
            data1: this.state.data1.concat('길동이')
        })
    }
    handleAdd2 = () => {
        this.setState({ //객체로 받아오기
            data2: this.state.data2.concat({
                name:'길동'+(Math.floor(Math.random()*10)),
                age: Math.floor(Math.random()*80+20)})
        })
    }
    handleAdd3 = () => {
        this.setState ({
            data3 : this.state.data3.concat({no:this.no++})
        })
    }
    handleAdd4 = () => {
        this.setState({
            data4: this.state.data4.concat(
                {id:this.id++,name:'고길동'+(Math.floor(Math.random()*10)),
                age:Math.floor(Math.random()*20+10)
            })
        })
    }
    
    handleRemove = (num) => {
            this.setState({
                data4: this.state.data4.filter( item => item.id !== num)
            })
    }
    
    handleModify1 = (num) => {
        this.setState({
            data4: this.state.data4.map(item => {
                if( item.id === num) {
                    return {
                        ...item,
                        name:'강호동',
                        age:30
                    }
                }
                return item;
            })
        })
    }
    handleModify2 = (num) => {
        this.setState({
            data4: this.state.data4.map( item => item.id === num ? {
            ...item,
            name:'아이폰',
            age:40}:item)
        })
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={this.handleAdd1}>data1추가</button>
                    <button onClick={this.handleAdd2}>data2추가</button>
                    <button onClick={this.handleAdd3}>data3추가</button>
                    <button onClick={this.handleAdd4}>data4추가</button>
                </p>
                <p>
                    <button onClick={() => this.handleRemove(1)}>data4 1삭제</button>
                    <button onClick={() => this.handleRemove(3)}>data4 3삭제</button>
                </p>
                <p>
                    <button onClick={() => this.handleModify1(2)}>data4 2수정</button>
                    <button onClick={() => this.handleModify2(4)}>data4 4수정</button>
                </p>
                <hr/>
                <h2>data1[]</h2>
                {
                    this.state.data1.map((item,index) => <p key={index}>
                        {index} / {item}
                    </p>)
                }
                <hr/>
                <h2>data2[]</h2>
                {
                    this.state.data2.map( (item,index) => <p key={index}>
                        {index} / {item.name} / {item.age}
                    </p>)
                }
                <hr/>
                <h2>data3[]</h2>
                {
                    this.state.data3.map( item => <p key={item.no}>
                            고유번호 : {item.no}
                        </p>)
                }
                <hr/>
                <h2>data4[]</h2>
                {
                    this.state.data4.map(item => <p key={item.id}>
                        번호:{item.id}/이름{item.name}/나이{item.age}
                    </p>)
                }
            </div>
        );
    }
}

export default Test5;