import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'; 


import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Error_Page from './pages/Error_Page';
import Houses from './components/Houses';
import Score from './components/Score';
import Scoreboard from "./pages/Scoreboard"


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/houses/:house" component={Houses} />
          <Route exact path="/scores/:house" component={Score}/>
          <Route exact path="/scores/" component={Scoreboard}/>
          <Route status={404} component={Error_Page} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
