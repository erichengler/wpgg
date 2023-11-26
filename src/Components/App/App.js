import {
	HashRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import Login from '../Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
