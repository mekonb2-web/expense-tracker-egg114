export function createExpense(name, amount, date, category) {
    return {name, amount, date, category};
}

export function sortExpenses(expenses) {
    expenses.sort((a, b) =>
        a.date.localeCompare(b.date)
    );
}