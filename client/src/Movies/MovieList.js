import React from 'react';
import {useHistory} from 'react-router-dom'

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  // console.log(props.movie) returns fnx
  let history = useHistory()
  // let params = useParams() why not work? / not needed tho

function handleClick(){
  history.push(`/movies/${props.movie.id}`) //adjusts end of link + number. movie.id broke, needs props
}

  return (
    <div onClick={handleClick} className="movie-card">
      {/* adding handle click function*/}
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
