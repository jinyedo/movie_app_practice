import React from 'react';

class State extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor");
    }

    // state는 Object이고 컴포넌트의 동적데이터를 넣을 공간이 있다. 
    // 변경할 데이터를 state에 넣으면 된다.
    state = {
        count: 0
    }

    add = () => {
        this.setState(function(current) {
            return current.count = current.count + 1;
        });
    }

    minus = () => {
        this.setState(current => ({
            count: current.count - 1
        }));
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    // render()을 사용하여 JSX를 반환
    render() {
        console.log("render");
        return (
        <div>
            <h1>The number is: {this.state.count}</h1>

            {/* add()는 즉시 발생하지만 add는 버튼 클리시만 발생한다. */}
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
        )
    }
}

export default State;