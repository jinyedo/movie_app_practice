import React from 'react';

class Detail extends React.Component {
    
    componentDidMount() {
        // location은 state를 사용할 수 있고, | history는 url 관련 설정을 할 수 있다.
        const { location, history } = this.props;
        if (location.state === undefined) { 
            history.push("/"); // Home으로 되돌아가기
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <h1>{location.state.title}</h1>
        } else {
            return null;
        }
    }
}

export default Detail;