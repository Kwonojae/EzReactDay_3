import React, { Component } from 'react';

class Test8 extends Component {
    state = {
        username:'',
        useraddr:''
    }

    //비구조할당
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    // //name값 가져옴 == 키값 가져옴
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }
 
    // // 밑에거랑 같은거 줄이기 키값으로 가져온거
    // handleChange1 = (e) => {
    //     this.setState({
    //         ['username']:e.target.value
    //     })
    // }
    // handleChange2 = (e) => {
    //     this.setState({
    //         ['useraddr'] : e.target.value
    //     })
    // }
    // handleChange1 = (e) => {
    //     this.setState({
    //         username:e.target.value
    //     })
    // }
    // handleChange2 = (e) => {
    //     this.setState({
    //         useraddr : e.target.value
    //     })
    // }
    render() {
        return (
            <div>
                <input type="text" name="username" onChange={this.handleChange}/>
                <input type="text" name="useraddㄱ" onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Test8;