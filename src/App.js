import './App.css';
import Home from './Components/HomeScreen/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardDetails from './Components/CardDetails/CardDetails';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/CardDetails/:idTeam">
            <CardDetails />
          </Route>
          <Route path= "*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
