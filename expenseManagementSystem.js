// app.js

// Function to get expenses from localStorage
function getExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    return expenses;
  }
  
  // Function to save expenses to localStorage
  function saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }
  
  // Function to update the UI with the latest expenses and total
  function updateExpenseList() {
    const expenses = getExpenses();
    const expenseList = document.getElementById('expenseList');
    const totalAmount = document.getElementById('totalAmount');
    
    // Clear the current list
    expenseList.innerHTML = '';
    
    let total = 0;
    
    // Loop through expenses and display them
    expenses.forEach((expense) => {
      const li = document.createElement('li');
      li.textContent = `${expense.category} - $${expense.amount} on ${expense.date}: ${expense.description}`;
      expenseList.appendChild(li);
      total += parseFloat(expense.amount);
    });
  
    // Update the total amount
    totalAmount.textContent = total.toFixed(2);
  }
  
  // Event listener for form submission
  document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get the values from the input fields
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
  
    // Create a new expense object
    const expense = {
      amount: parseFloat(amount),  // Ensure it's a number
      category: category,
      description: description,
      date: date
    };
  
    // Get current expenses from localStorage
    const expenses = getExpenses();
  
    // Add the new expense to the array
    expenses.push(expense);
  
    // Save the updated expenses to localStorage
    saveExpenses(expenses);
  
    // Reset the form fields
    document.getElementById('expenseForm').reset();
  
    // Update the UI with the new list of expenses
    updateExpenseList();
  });
  
  // Initialize the app by displaying the expenses when the page loads
  updateExpenseList();
  