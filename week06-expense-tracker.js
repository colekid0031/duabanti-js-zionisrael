
//  This is my Bank acc
 let moneyAmount = [{
    money: 50000,
 }]
// varibles  
const spendLimits = 10000;
const itemToBuy = 14;
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

function addExpense(expense, expenses) {
  expenses.push(...expense); 
  return expenses;
}
const updatedExpenses = addExpense(extraExpenses, expenses);


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

function buyItem(money, expense, index) {
  let itemPrice = expense[index].price;
  let remainingMoney = money - itemPrice;
    moneyAmount = updateMoney(moneyAmount, itemPrice, false);
  
  return `You've bought ${expense[index].item} for ${formattedMoney(itemPrice)} only ${formattedMoney(remainingMoney)} Remains.`;
}


while (5 > 0) {
    console.log(isOverBudget(moneyAmount[0].money, spendLimits, moneydiffrence));

}

// ALL CALLS GO BELOW HERE |S
console.log(`Updated from ${expenses.length} Items to `, addExpense(extraExpenses, expenses), `Items to buy`);
console.log(isAvalible, showAvaliableItems)
// console.log(buyItem(moneyAmount[0].money, expenses, itemToBuy));
// use only if array has been updated
console.log(buyItem(moneyAmount[0].money, updatedExpenses, itemToBuy));
// console.log(getMostExpensive(expenses)); 
console.log(moneydiffrence(moneyAmount[0].money, spendLimits));