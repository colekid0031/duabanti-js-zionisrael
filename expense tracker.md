## 1. What does it need to do? From the brief:

.Store expenses: Maintain an array of expense objects.
.Add expenses: Allow a new expense to be added to the existing list.
.Display expenses: Show all expenses in a nicely formatted layout.
.Calculate total: Calculate the total amount spent.
.Calculate category totals: Show how much was spent in each category.
.Find most expensive: Identify the single most expensive expense.
Budget warning: Warn the user when total spending exceeds the budget.
## What shape is the data?

# the data will be stored as so

1. This is my Bank acc holding my money, income Data
 const bank = [
    money: 5000,
    income: 400,
    ]
2. It should be divided into categories in one obj as so...
const expenses [
    food:{    
        {product: `Pizza`, Price: 10, amount: 2, date`2026/11/10` },
    },
    drinks:{
        {product: `Water`, Price: 3, amount: 10, date`2026/11/10` },

    },
    Veichles:{    
        {product: `Car`, Price: 100000, amount: 2, date`2026/11/10` },       {product: `plane`, Price: 400000, amount: 2, date`2026/11/10` },
    },
    etc:{

    },
    
    {product: `Car`, Price: 100000, amount: 2, date`2026/11/10` },
]
note : the const will be stored as numbers and then be converted and  styled later for viewing

## What is each function called
function addExpense(){
        <!-- code that allows you to add a new thing to buy to the buying object -->
}
function formatExpense(){
    <!-- code that formats expenses  -->
}
function getTotalSpending(){
    <!-- code that shows all purchases, what you bought how much it cost in order from most expensive to least expensive -->
}
function getMostExpensive(){
<!-- code it just shows the most expensive item you can buy -->
}

function isOverBudget(){

<!-- automatically runs if you exceed budgeti think i'll try to use an infint while loop to constantly make sure it isnt overspent or reasearch a way to make it run the check every 2 seconds -->
}
