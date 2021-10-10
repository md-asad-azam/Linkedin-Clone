import React from 'react';
import './App.css';
import Feed from './components/Feed';
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
        <Feed />
        {/* feed */}
        {/* widgets */}
      </div>

    </div>
  );
}

export default App;
