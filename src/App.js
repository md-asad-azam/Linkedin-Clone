import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />

      {/* body */}
        <div className="app_body">
          <Sidebar />
        </div>
        {/* feed */}
        {/* widgets */}
    </div>
  );
}

export default App;
