import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Routes, Link} from 'react-router-dom';
import VenueList from './components/VenueList';
import TeamsList from './components/TeamsList';
import TeamDetails from './components/TeamDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Welcome to React...</h1>
        <h2>Your first website id ready to run</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
      <Link to="/VenueList">List of Venues</Link>
      <Link to="/TeamsList">List of teams</Link>
      <Link to="/TeamDetails">Details of Team</Link>
      
    <Routes>
         <Route exact path="/VenueList" element={<VenueList/>}></Route>
         <Route exact path="/TeamsList" element={<TeamsList/>}></Route>
         <Route exact path="/TeamDetails" element={<TeamDetails/>}></Route>
    </Routes>
    </div>
    </Router>

  );
}

export default App;
