const cedis = 533333;
const celsius = 50;
const km = 50;
//  CD TO USD 
function cedisToDollars(cedis) {
  let Dollars = cedis * 0.085;
  Dollars = Dollars.toFixed(2);
  return Dollars;
 }
 console.log(cedisToDollars(cedis))
// KM TO M 
function kmToMiles(km) { 
let miles = km *  0.621371;
miles = miles.toFixed
return miles;
}