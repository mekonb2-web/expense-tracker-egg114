import { createExpense, sortExpenses } from "./functions.mjs";

const expenses = [];

    // for expenses to be added to list
    document.getElementById("expense-form").addEventListener("submit", function(event) {
        event.preventDefault();

        // get expense info
        const name = document.getElementById("expenseName").value;
        const amount = document.getElementById("expenseAmount").value;
        const date = document.getElementById("expenseDate").value;
        const category = document.getElementById("expenseCategory").value;

        // add expense to list
       expenses.push(createExpense(name, amount, date, category));
      
        
    // display expenses
     sortExpenses(expenses);
     
    const list = document.getElementById("expenseList");
    list.innerHTML = "";
    expenses.forEach(expense => {
        const item = document.createElement("li");
        item.innerHTML = expense.date + " - " + expense.category + " - " + expense.name + " - $" + expense.amount;
        list.appendChild(item);
    
        });
    });