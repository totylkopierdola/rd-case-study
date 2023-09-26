import React from 'react';

function calculateAccountBalance(selectedUser, transactions) {
  let accountBalance = 0;

  transactions.forEach((transaction) => {
    if (transaction.sourceId === selectedUser) {
      accountBalance -= transaction.amount;
    } else if (transaction.targetId === selectedUser) {
      accountBalance += transaction.amount;
    }
  });

  return accountBalance.toFixed(2);
}

function AccountBalance({ selectedUser, transactions }) {
  const accountBalance = calculateAccountBalance(selectedUser, transactions);

  console.log(accountBalance);

  return (
    <div>
      <h2>Balance: {accountBalance} </h2>
    </div>
  );
}

export default AccountBalance;
