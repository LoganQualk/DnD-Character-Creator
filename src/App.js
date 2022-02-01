import './App.css';
import { GlobalProvider } from './Context/GlobalContext';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Navbar from './Navbar';
import Spells from './Spells';
import Notes from './Notes';
import Items from './Items';
import Races from './Races';
import Backgrounds from './Backgrounds';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <div id="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/spells">
              <Spells />
            </Route>
            <Route path="/items">
              <Items />
            </Route>
            <Route path="/races">
              <Races />
            </Route>
            <Route path="/backgrounds">
              <Backgrounds />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
