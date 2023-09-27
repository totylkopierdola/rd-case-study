import React from 'react';
import { render } from '@testing-library/react';
import TransactionTable from './TransactionTable';

const transactions = [
  { sourceId: 'user1', targetId: 'user2', amount: 100 },
  { sourceId: 'user2', targetId: 'user1', amount: 50 },
];
const selectedUser = 'user1';
const users = [
  { id: 'user1', name: 'User 1' },
  { id: 'user2', name: 'User 2' },
];
const searchQuery = '';

test('renders transaction table correctly', () => {
  const { getByText } = render(
    <TransactionTable
      transactions={transactions}
      selectedUser={selectedUser}
      users={users}
      searchQuery={searchQuery}
    />
  );

  const fromLabel = getByText('From (Source ID):');
  const toLabel = getByText('To (Target ID)');
  const amountLabel = getByText('Amount:');

  expect(fromLabel).toBeInTheDocument();
  expect(toLabel).toBeInTheDocument();
  expect(amountLabel).toBeInTheDocument();
});