import './App.css';
import { Main } from './Component/Main';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Main />
      </Switch>
    </Router>
  );
}

export default App;
