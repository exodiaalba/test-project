
import './App.css';
import Add from './Component/Add';
import Filter from './Component/Filter';
import MovieList from './Component/MovieList';
import NavBar from './Component/NavBar';
import {movies} from './Component/Movies';
import {useState} from 'react';
import Crs from "./Component/Crs";
import Details from "./Component/Details";
import {Switch,Route} from "react-router-dom";
import Tshirtlist from './Component/Tshirtlist';
import {tshirtt} from "./Component/Tshirt"

function App() {
   //console.log(movies);

   const [movieList,setmovieList]=useState (movies)
   console.log(movieList);

const addHandler =(newmovie)=>{
  setmovieList({...MovieList,newmovie})
}

// eslint-disable-next-line no-unused-vars
const[tshirtList] =useState (tshirtt)
console.log(tshirtList);


    return (
      <div className="App">
        <NavBar />
        <Filter />
        <Add addHandler={addHandler} />

        <Switch>

          <Crs path="/Home" />

          <Route path="/Movies" render={() => <MovieList movieList={movieList} />} />
          <Route path="/Details/:id" render={(props) => <Details {...props} list={movies} />} />
          <Route path="/T-shirt" render={() => <Tshirtlist Tshirtlist={Tshirtlist} />} />
        
        </Switch>

      </div>
    );
  }

export default App;
