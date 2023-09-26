import React, { useState } from 'react';
import UserSelector from './UserSelector';
import '../styles/TransactionHistory.css';
import AccountBalance from './AccountBalance';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';
import data from '../data';

function TransactionHistory() {
  const [selectedUser, setSelectedUser] = useState(data.users[0].id);
  const [transactions, setTransactions] = useState(data.transactions);


  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  const handleSelectUser = (e) => {
    console.log(e.target.value)
    setSelectedUser(e.target.value);
  };

  return (
    <div className='transaction-history' >
      <UserSelector users={data.users} selectedUser={selectedUser} onSelectUser={handleSelectUser} />
      <AccountBalance selectedUser={selectedUser} transactions={transactions} />
      <SearchBar onSearch={handleSearch} />
      <TransactionTable searchQuery={searchQuery} transactions={transactions} selectedUser={selectedUser} users={data.users} />
    </div>
  );
}

export default TransactionHistory;
