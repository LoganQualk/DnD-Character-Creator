import './App.css';
import {GlobalProvider} from './Context/GlobalContext';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Navbar from './Navbar';
import Spells from './Spells';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div>
          <Navbar />
          <div>
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
            </Switch>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
