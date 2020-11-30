import React, { Component } from 'react';

class Test3Item extends Component {
    render() {
        // const {poster,actor,title,director,date} = this.props.item 이렇게도 가능 
        const {item, onRemove } = this.props
        return (
            <div>
                <article>
                    <div className="left">
                        <img src={item.poster}/>
                    </div>
                    <div className="right">
                        <h3>{item.actor}</h3>
                        <ul>
                            <li>출연진:{item.actor}</li>
                            <li>감독:{item.director}</li>
                            <li>개봉일:{item.date}</li>
                        </ul>
                        <button onClick={() => onRemove(item.no)}>삭제</button>
                    </div>
                </article>
            </div>
        );
    }
}

export default Test3Item;