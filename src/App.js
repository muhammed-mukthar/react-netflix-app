import React from 'react';
import Navbar from './Components/NavBar/navbar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals,Actions,ComedyMovies,Documentaries,RomanceMovies} from './urls'

function App() {
  return (
    <div className="App">
 
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={Actions} title='Action' isSmall/>
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>

      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>
    </div>
  );
}

export default App;
