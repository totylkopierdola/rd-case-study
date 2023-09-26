import React, { useState } from 'react';
import '../styles/TransactionTable.css';
import Pagination from './Pagination';

const TransactionTable = ({ transactions, selectedUser, users, searchQuery }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10; 
  const userTransactions = transactions.filter(
    (transaction) =>
      transaction.sourceId === selectedUser || transaction.targetId === selectedUser
  );

  const totalPages = Math.ceil(userTransactions.length / transactionsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getUserNameById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown User';
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = userTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const filteredTransactions = currentTransactions.filter((transaction) => {
    const sourceUserName = getUserNameById(transaction.sourceId).toLowerCase();
    const targetUserName = getUserNameById(transaction.targetId).toLowerCase();
    return (
      sourceUserName.includes(searchQuery.toLowerCase()) ||
      targetUserName.includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className='transaction-table'>
      <h1>User Transactions</h1>
      <div className='transaction-list'>
        {filteredTransactions.map((transaction, index) => (
          <div key={index} className='transaction-item' style={
            transaction.sourceId === selectedUser ? 
            { backgroundColor: "rgba(255, 50, 71, 0.2)" } : { backgroundColor: "rgba(60, 179, 113, 0.2)" }
          }>
            <div className='transaction-info'>
              <div className='transaction-label'>From (Source ID):</div>
              <div className='transaction-value'>{getUserNameById(transaction.sourceId)}</div>
            </div>
            <div className='transaction-info'>
              <div className='transaction-label'>To (Target ID):</div>
              <div className='transaction-value'>{getUserNameById(transaction.targetId)}</div>
            </div>
            <div className='transaction-info'>
              <div className='transaction-label'>Amount:</div>
              <div className='transaction-value'>{transaction.amount}</div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TransactionTable;
