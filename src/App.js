import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./page/Add";
import Navbar from "./components/Navbar";
import ListEmployee from "./page/ListEmployee";
import Update from "./page/Update";
function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar></Navbar>

      </div>
      <Switch>
        <Route exact path="/home" component={ListEmployee} />
        <Route path="/update/:id" component={Update} />
        <Route path="/add" component={Add} />
        <Route path="/" component={ListEmployee} />
      </Switch>
    </Router>
  );
}

export default App;
