
import test from 'node:test';
import assert from 'node:assert/strict';

import { createExpense, sortExpenses } from '../functions.mjs';

test('creates an expense', () => {
  const expense = createExpense('Bananas', 5, '2026-11-10', 'Grocery');

  assert.deepStrictEqual(expense, {
    name: 'Bananas',
    amount: 5,
    date: '2026-11-10',
    category: 'Grocery'
  });
});

test('sorts expenses by date', () => {
  const expenses = [
    { name: 'Water bill', date: '2026-11-10' },
    { name: 'Rent', date: '2026-11-09' }
  ];

  sortExpenses(expenses);

  assert.strictEqual(expenses[0].name, 'Rent');
  assert.strictEqual(expenses[1].name, 'Water bill');
});
