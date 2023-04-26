import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteConfig from './utils/RouteConfig';

function App() {
  return (
    <div className="App">
      <Router>
        <RouteConfig/>
      </Router>
    </div>
  );
}

export default App;
