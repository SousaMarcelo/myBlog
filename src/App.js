import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
