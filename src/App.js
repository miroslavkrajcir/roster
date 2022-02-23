import React from "react";

function App() {
  return (
    <div className="App">
      Hello world!
      {console.log(process.env.REACT_APP_SOME_VALUE)}
      {console.log(process.env.REACT_APP_FIREBASE_CONFIG)}
      {process.env.REACT_APP_SOME_VALUE}
      <p>...</p>
    </div>
  );
}

export default App;
