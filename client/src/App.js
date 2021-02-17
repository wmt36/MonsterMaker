import Home from '../src/Pages/home'
import Athletes from '../src/Pages/athletes'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {


  return (

    <Router>
    <div>
    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/athletes" component={Athletes} />
        </Switch>
    
        </div>
  </Router>
  );
}

export default App;
