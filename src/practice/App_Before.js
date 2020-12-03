import React from 'react'; // React
import axios from 'axios'; // data fetch
import Movie from './component/Movie'; // Movie component
import "./App.css";

class App_Before extends React.Component {

    state = {
        isLoading: true, // 로딩
        movies: [] // 영화 정보를 담을 배열
    }

    getMovies = async () => {
        // 좋은 코드가 아님
        // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
        // console.log(movies.data.data.movies); 

        // ↑와 동일한 
        const {data: {
            data: {
                movies
            }
        }} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=ratting"); // sort_by=ratting - ratting순으로정렬
        //console.log(movies)
        this.setState({ movies , isLoading: false}); // state의 movies[] 안에 movies의 데이터 넣기

    }

    // reder()이 실행된 다음 호출
    componentDidMount() {
        // axios.get()을 사용하여 data fatch를 해야하지만 데이터를 불러오는데 시간이 걸리므로
        // getMovies() 함수를 만들어 async 와 await 키워드를 사용하여 JavaScript에게 기다리라고 알려줌
        this.getMovies(); 
    }

    // render()을 사용하여 JSX를 반환
    render() {
        const { isLoading, movies } = this.state; // this.state를 타이핑 하고 싶지 않을때 변수로 만들어 버리기
        return (
            <div className="container">
                {isLoading ? 
                    // 로딩중이라면
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>

                    // 로딩이 끝났다면 Movie.js의 컴포넌트를 가져와 화면에 뿌리기
                    : <div className="movies"> 
                        {movies.map(movie => {
                            return (
                                <Movie 
                                    key={movie.id}
                                // { 이것만 하면 오류가남 -> 고유 key값이 없기 때문에 -> 그래서 윗줄에 고유 key를 만들어 줄거다 ↑
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                // }
                                />
                            );
                        })}
                    </div> 
                }
            </div>
        );
    }
}

export default App_Before;