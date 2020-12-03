import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import { Link } from 'react-router-dom';

// state가 필요하지 않은 경우 class형 컴포넌트는 필요없다.
// 대신 function형 컴포넌트를 사용하면 된다.

function Movie({ id, year, title, summary, poster, genres }) {
    return(
            <div className="movie">
                <Link to={{
                    pathname: `/movie/${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        genres
                    }
                }}>
                    <img src={poster} alt={title} title={title} />
                    <div className="movie_data">
                        <h3 className="movie_title">{title}</h3>
                        <h5 className="movie_year">{year}</h5>
                        <ul className="movie_genres">
                            {genres.map((genre, index) => { // map을 사용할때 각각의 아이템에는 반드시 고유 key값이 있어야한다.
                                return (
                                    <li key={index}>{genre}</li>
                                );
                            })}
                        </ul>
                        <p className="movie_summary">{summary.slice(0, 140)}...</p>
                    </div>
                </Link>
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