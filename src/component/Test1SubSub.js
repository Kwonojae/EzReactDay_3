import React, { Component } from 'react';

class Test1SubSub extends Component {
    render() {
        return (
            <div>
                <h2>Test1SubSub</h2>
                <p>
                    <button onClick={() => this.props.onModify1(2)}>수정2</button>
                    <button onClick={() => this.props.onModify2(4)}>수정4</button>
                    <button>수정3</button>
                </p>
            </div>
        );
    }
}

export default Test1SubSub;