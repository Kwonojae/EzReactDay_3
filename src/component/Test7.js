import React, { Component } from 'react';

class Test7 extends Component {
    state = {
        userid : '',
        userpw : '',
        email: ''
    }

    handleChange1= (e) => {
        this.setState({
            userid: e.target.value
        })
    }
    handleChange2= (e) => {
        this.setState({
            userpw: e.target.value
        })
    }
    handleChange3= (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleReset = (e) => {
        this.setState({
            userid:'',
            userpw:'',
            email:''
        })
    }

    render() {
        const { userid, userpw, email} = this.state
        return (
            <div>
                <p>
                    <input type="text" value={userid} onChange={this.handleChange1}/>
                    <input type="text" value={userpw} onChange={this.handleChange2}/>
                    <input type="text" value={email} onChange={this.handleChange3}/>
                    <button onClick={this.handleReset}>초기화</button>
                    <h4>아이디:{userid}</h4>
                    <h4>비밀번호:{userpw}</h4>
                    <h4>이메일:{email}</h4>
                </p>
            </div>
        );
    }
}

export default Test7;