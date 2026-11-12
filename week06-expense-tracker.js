
//  This is my Bank acc
 let moneyAmount = [{
    money: 50000,
 }]
// varibles  
const spendLimits = 10000;
let moneySpent = 0;
// end Of varaibles
 const extraExpenses =[
    {type: `Food` ,item: `IceCream`, price: 7 , isAvalible: true, stock: 289},
    {type: `Vehicle` ,item: `Train`, price: 1000000 , isAvalible: true, stock: 1},
    {type: `Drink` ,item: `Wine`, price: 250 , isAvalible: true, stock: 90},
    {type: `Vehicle` ,item: `Jet`, price: 250000 , isAvalible: true, stock: 4},
]

expenses = [
    // Vehicles cars planes etc.
    {type: `Vehicle` ,item: `Car`, price: 4000 , isAvalible: true, stock: 3},
    {type: `Vehicle` ,item: `Plane`, price: 50000 , isAvalible: true, stock: 1},
    {type: `Vehicle` ,item: `MotorCycle`, price: 2000 , isAvalible: true, stock: 10},
    {type: `Vehicle` ,item: `Bulldozer`, price: 18000 , isAvalible: true, stock: 0},
//    Food
    {type: `Food` ,item: `Pizza`, price: 45 , isAvalible: true, stock: 390},
    {type: `Food` ,item: `Fufu`, price: 70 , isAvalible: true, stock: 50},
    {type: `Food` ,item: `fries`, price: 15 , isAvalible: true, stock: 1000},
    // drinks
    {type: `drinks` ,item: `water`, price: 2 , isAvalible: true, stock: 3},
    {type: `drinks` ,item: `Juice`, price: 4.50 , isAvalible: true, stock: 3},
    {type: `drinks` ,item: `Hot-Chocolate`, price: 10 , isAvalible: true, stock: 3},
    {type: `drinks` ,item: `Lemonade`, price: 5.99 , isAvalible: true, stock: 0},
  ];

function formattedMoney(money) {
    let currency = 'GHS'
  return new Intl.NumberFormat('en-GH', {style: 'currency',currency: currency,}).format(money);
}

function getMostExpensive(item) {
  return item.reduce((max, current) => {
    if (current.price > max.price ){
        return current;
    }else{
        return max;
    }
  });
}

function addExpense(expense ,expenses){
    const newExpense = expenses.push(
        expense[0], expense[1], expense[2], expense[3],
    )
        return newExpense;
}



function isOverBudget(moneyLeft, spendLimit, moneydiffrence){

let message = ``; 
    if(moneyLeft <= spendLimit){
        return message = `You are over your spending limit with only ${formattedMoney(moneyLeft)} 
in your account with the Limit being ${formattedMoney(spendLimit)}.`     
    } else{ 
        return message = `You arent over the limit yet with ${formattedMoney(moneyLeft)} in your Account.
        You still have ${ moneyLeft - spendLimit } left Till you hit your limit`;
        
    }
}

function moneydiffrence(moneyLeft, spendLimit) {
    let Diffrence =  0;
    if (moneyLeft < spendLimit){
        return 0;
    } else if (moneyLeft > spendLimit){
        Diffrence = moneyLeft - spendLimit;
        return Diffrence; 
    }
}
    const isAvalible = expenses.map((M) =>{
        if (M.stock <= 0) {
          return  M.isAvalible = false;
        } else {
           return M.isAvalible = true;
        }})


    const showAvaliableItems = expenses.filter((A) => A.isAvalible === true)

    function itemInfo(expense, index){
        return expense[index];
    }

    function updateMoney(moneyAmounts, downValue, Up) {
      if (Up === true) {
        return moneyAmounts.map(M => ({ money: M.money + downValue }));
      } else {
        return moneyAmounts.map(M => ({ money: M.money - downValue }));
       }
    }

      return  moneyAmount = updateMoney(moneyAmount, expenses[5].price, false); 

console.log(moneyAmount);
function buyItem(money, expense, index){
        let itemPrice = expense[index].price
        let Money = money - itemPrice;
        return Money, itemPrice, `You've bought ${expense[index].item} for ${ formattedMoney(itemPrice) } only ${formattedMoney(Money)} Remaining.` 
    }










// console.log(buyItem(moneyAmount[0], expenses))
let index = 5;
// console.log(buyItem(moneyAmount, expenses, 5));

// console.log(buyItem(moneyAmount.money, extraExpenses));

// ALL CALLS GO BELOW HERE |S
// console.log(isAvalible, showAvaliableItems)
// console.log(`Updated from ${expenses.length} Items to `, addExpense(extraExpenses, expenses), `Items to buy`);
// console.log(getMostExpensive(expenses)); 
// console.log(isOverBudget(moneyAmount[0].money, spendLimits, moneydiffrence));
// console.log(moneydiffrence(moneyAmount[0].money, spendLimits));