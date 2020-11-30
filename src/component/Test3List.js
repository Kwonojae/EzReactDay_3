import React, { Component } from 'react';
import Test3Item from './Test3Item';

class Test3List extends Component {
    render() {
        const {data} = this.props
        return (
            <>
                {
                    data.map(item => <Test3Item
                    item = {item}
                    />) //부모한테 받아온값을 자식한테 줌
                }
            </>
        );
    }
}

export default Test3List;