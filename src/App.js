import React from 'react';
import './App.css';
import './components/Filter';
import Filter from './components/Filter';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Filter/>
      </div>
    );
  }
}

export default App;
