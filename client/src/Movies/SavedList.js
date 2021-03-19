import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {useHistory as uH} from 'react-router-dom'

export default function SavedList(props) {

  let history = uH()

  function handleClick(){
    history.push('/') //needs home
  }


  return (
    // <Router>
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        
        <div onClick={handleClick}className="home-button">Home</div>
      </div>
  );
}


          {/* <Link to="/">Home</Link>
        </div>
      </div> */}
    {/* </Router> */}
  {/* );
} */}
