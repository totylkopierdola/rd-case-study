import React from 'react';
import { render } from '@testing-library/react';
import AccountBalance from './AccountBalance';

const selectedUser = 'user1';
const transactions = [
  { sourceId: 'user1', targetId: 'user2', amount: 100 },
  { sourceId: 'user2', targetId: 'user1', amount: 50 },
];

test('renders account balance correctly', () => {
  const { getByText } = render(
    <AccountBalance selectedUser={selectedUser} transactions={transactions} />
  );

  const balanceText = getByText(/Balance: -?\d+\.\d{2}/);
  expect(balanceText).toBeInTheDocument();
});
