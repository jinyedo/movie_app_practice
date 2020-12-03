import React from 'react';
import axios from 'axios';

class Axios extends React.Component {

    state = {
        isLoading: true, // 로딩
        movies: [] // 영화 정보를 담을 배열
    }

    getMovies = async () => {
        const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
    }

    // reder()이 실행된 다음 호출
    componentDidMount() {
        // axios.get()을 사용하여 data fatch를 해야하지만 데이터를 불러오는데 시간이 걸리므로
        // getMovies() 함수를 만들어 async 와 await 키워드를 사용하여 JavaScript에게 기다리라고 알려줌
        this.getMovies(); 
    }

    // render()을 사용하여 JSX를 반환
    render() {
        const { isLoading } = this.state; // this.state를 타이핑 하고 싶지 않을때 변수로 만들어 버리기
        return (
            <div>
                {isLoading ? "Loading" : "We are ready"}
            </div>
        );
    }
}

export default Axios;