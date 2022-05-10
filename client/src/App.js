import { useState, useReducer } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div style={{padding: '0 20px'}}>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>
          Down
        </button>
        <button onClick={() => setCount(count + 1)}>
          Up
        </button>
      

      </div>
      
      
      {/* Header */}
      
    </Router>
    
  );
}

export default App;
