import './App.css';
import { Main } from './Component/Main';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Main />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
