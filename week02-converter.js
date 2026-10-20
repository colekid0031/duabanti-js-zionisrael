const cedis = 2001;
const celsius = 39;
const km = 50;
//  CD TO USD 
function cedisToDollars(cedis) {
  let Dollars = cedis * 0.085;
  Dollars = Dollars.toFixed(2);
  return Dollars;
 }
// KM TO M 
function kmToMiles(km) { 
let Miles = km *  0.621371;
Miles = Miles.toFixed(2);
return Miles;
}
// celsius to F
function celsiusToFahrenheit(celsius) {
    let Fahrenheit = celsius * 1.8 + 32;
    Fahrenheit = Fahrenheit.toFixed(2);
    return Fahrenheit;
 }
 console.log (`GH₵${cedis} equals about $${cedisToDollars(cedis)} USD`)
 console.log (`${km} kilometers equals to ${kmToMiles(km)} Miles`)
 console.log (`${celsius}°C Degrees celsius is equals to $${celsiusToFahrenheit(celsius)}°F Fahrenheit`)
