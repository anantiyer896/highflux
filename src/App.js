
import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import {Route, BrowserRouter} from "react-router-dom"

function App() {
  const routes=(
    
    <BrowserRouter >
    <>
      <Route path="/" component={Home} exact={true} />
      <Route path="/dashboard" component={Dashboard} />
    </>
    </BrowserRouter>
    
  )
  return routes;
}

export default App;
