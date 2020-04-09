/*math.random te da un numero random enre 0 y 1, a eso lo multiplicamos por 1000
y le aplicamos math.floor para asegurarnos de que sea un nro entero*/
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;
if(runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}
if(runnerAge > 18 && registeredEarly) {
  console.log('You will race at 9:30 am. Your race number is ' + raceNumber + '.');
} else if (runnerAge > 18) {
  console.log('You will race at 11:00 am. Your race number is ' + raceNumber + '.');
}
if(runnerAge < 18) {
  console.log('You will race at 12:30 am. Your race number is ' + raceNumber + '.');
} else if(runnerAge === 18) {
  console.log('Go see the registration desk');
}
