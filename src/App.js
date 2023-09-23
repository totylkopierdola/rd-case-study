import React from 'react';
import './App.css'; // Import your CSS if you have any

import TransactionHistory from './components/TransactionHistory.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank Transaction History</h1>
      </header>
      <main>
        <TransactionHistory />
      </main>
    </div>
  );
}

export default App;
