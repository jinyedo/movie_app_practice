import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

// state가 필요하지 않은 경우 class형 컴포넌트는 필요없다.
// 대신 function형 컴포넌트를 사용하면 된다.

function Movie({ year, title, summary, poster, genres }) {
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie-genres">
                    {genres.map((genre, index) => { // map을 사용할때 각각의 아이템에는 반드시 고유 key값이 있어야한다.
                        return (
                            <li key={index}>{genre}</li>
                        );
                    })}
                </ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,      // 아이디
    year: PropTypes.number.isRequired,    // 연도 
    title: PropTypes.string.isRequired,   // 제목
    summary: PropTypes.string.isRequired, // 요약
    poster: PropTypes.string.isRequired,  // 사진
    genres: PropTypes.arrayOf(PropTypes.string).isRequired // 장르
}

export default Movie;