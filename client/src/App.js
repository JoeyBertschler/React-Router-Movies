//npm install react-router-dom
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Movie from "./Movies/Movie";
import MovieCard from "./Movies/MovieCard";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";

// function HomeAkaMovieList(props){
//   return <h1>Home Component</h1>;
// }

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being
    // "saved" more than once
  };

  return (
    // <Router>
      <div>
        <SavedList list={[ /* This is stretch */]} />
        
        <Link to='/'>TESUTO</Link> was "hello" before. removing 
        it yet not really for future ference | test2

        <Switch>
         {/* switch -> 'exact' keyword *can* become redundant - depends on first rend.*/}
        <Route exact path='/movies/:id' component={Movie}/>
        <Route exact path='/' 
          render={props => 
            <MovieList movies={movieList}/> 
          }
        />
        </Switch>

        {/* <Route exact path='/SavedList' component={SavedList}/> */}
        {/* <Route exact path='/SavedList' render={() => <Shop/>} /> // THIS VERSION DOES NOT PASS ANY PROPS*/}
      </div>
    // </Router>
  );

}
