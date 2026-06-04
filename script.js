let expenses = [];

const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");

addBtn.addEventListener("click", addExpense);

function addExpense() {

    const name =
        document.getElementById("expenseName").value;

    const amount =
        document.getElementById("expenseAmount").value;

    const category =
        document.getElementById("category").value;

    if (name === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    const expense = {
        name: name,
        amount: Number(amount),
        category: category
    };

    expenses.push(expense);

    displayExpenses();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

function displayExpenses() {

    expenseList.innerHTML = "";

    let totalAmount = 0;

    expenses.forEach(function(expense, index) {

        totalAmount += expense.amount;

        const li = document.createElement("li");

        li.innerHTML = `
            ${expense.name} (${expense.category}) - ₹${expense.amount}
            <button class="delete-btn" onclick="deleteExpense(${index})">
                Delete
            </button>
        `;

        expenseList.appendChild(li);
    });

    total.innerText = totalAmount;
}

function deleteExpense(index) {

    expenses.splice(index, 1);

    displayExpenses();
}