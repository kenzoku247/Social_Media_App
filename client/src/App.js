
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PageRender from './PageRender';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';

function App() {

  return (
    <Router>
      <input type="checkbox" name="" id="theme" />
      <div className='App'>
        <div className="main">
          <Routes>
            <Route path="/:page" exact element={<PageRender/>} />
            <Route path="/:page/:id" exact element={<PageRender/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
