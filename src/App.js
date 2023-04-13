import './App.css';
import { useState } from 'react';

function App() {
  const [switcher, setSwitcher] = useState(false)
  const handleSwitcher = () => {
    setSwitcher(!switcher)
  }

  return (
    <>
      <div className="container">
        <div class="window"
          style={{ backgroundColor: switcher ? '#5cf' : 'blue' }}
        >
          <div class="planet"
            style={{ backgroundColor: switcher ? 'yellow' : '#fff' }}
          ></div>
        </div>
        <button onClick={handleSwitcher}>{switcher ? 'Night' : 'Day'}</button>
      </div>

    </>
  );
}

export default App;
