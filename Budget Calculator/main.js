var budget = 0
var balance = 0
var expense = 0
var count = 0 
var expenseAmount = 0

function addBudget(){
    budget = document.getElementById('budgetinput').value
    document.getElementById('budget-amount').innerText = budget
    document.getElementById('balance-amount').innerText = budget
}

function addExpense(){
    expensetitle= document.getElementById('budgetinputtitle').value

    expense = parseInt(document.getElementById('amountinput').value)
    budget = parseInt(document.getElementById('budget-amount').innerText)
    if(count===0){
        balance = budget - expense
    }else{
        balance = balance - expense
    }

    if(count===0){
    
        
    }else{
        expenseAmount = parseInt(document.getElementById('expense-amount').innerText)
        expense = expense + expenseAmount
    }
    document.getElementById('balance-amount').innerText= balance
    document.getElementById('expense-amount').innerText = expense
    
    count++

    // Insert in table
    var budgetinputtitle = document.getElementById('budgetinputtitle').value
    var table = document.getElementById('tbody')
    var row = table.insertRow()
    cell1 = row.insertCell(0)
    cell1.innerText = budgetinputtitle

    cell2 = row.insertCell(1)
    cell2.innerText = document.getElementById('amountinput').value

    cell3 = row.insertCell(2)
    cell3.innerHTML = `
        <button class="deleteBtn" onclick=onDelete(this)>Delete</button>
    `

    document.getElementById('amountinput').value = ""
    document.getElementById('budgetinputtitle').value = ""
}

function onDelete(button){
    const rowToBeDeleted = button.parentElement.parentElement;
    // console.log(document.getElementById('tbody'));
    const tbody = document.getElementById('tbody')
    tbody.deleteRow(rowToBeDeleted.rowIndex)

    const tds = rowToBeDeleted.getElementsByTagName("td")
    const deletedRowExpense =  parseInt(tds[1].innerText);

    const balanceAmount = parseInt(document.getElementById('balance-amount').innerText)
    const expenseAmount = parseInt(document.getElementById('expense-amount').innerText)

    
    expense = expenseAmount - deletedRowExpense
    balance = balanceAmount + deletedRowExpense
    
    document.getElementById('balance-amount').innerText = balance
    document.getElementById('expense-amount').innerText = expense


}