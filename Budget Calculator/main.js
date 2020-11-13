var budget = 0
var balance = 0
var expense = 0
var count = 0 

function addBudget(){
    budget = document.getElementById('budgetinput').value
    document.getElementById('budget-amount').innerText = budget
}

function addExpense(){
    expensetitle= document.getElementById('budgetinputtitle').value

    expense = parseInt(document.getElementById('amountinput').value)
    budget = parseInt(document.getElementById('budget-amount').innerText)
    if(count===0){
        balance = budget - expense
        count++
    }else{
        balance = balance - expense
    }
    document.getElementById('expense-amount').innerText = expense
    document.getElementById('balance-amount').innerText= balance


    
    document.getElementById('expenseamountshow').innerText = expense
    document.getElementById('expensetitle').innerText = expensetitle
    

}