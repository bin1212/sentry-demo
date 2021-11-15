import React from 'react';

function App() {
  const fn = () => {
    console.log(window.a.b);
  }
  return (
    <div className="App">
       <button onClick={fn}>Break the world</button>
    </div>
  );
}

export default App;
