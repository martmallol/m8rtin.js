function getSleepHours(day) {
   day = day.toLowerCase();
  //Aca abajo pones las horas que dormiste segun el dia
  switch (day) {
  case 'monday':
    return 8;
  case 'tuesday':
    return 7;
  case 'wednesday':
    return 10;
  case 'thursday':
    return 8;
  case 'friday':
    return 9;
  case 'saturday':
    return 8;
  case 'sunday':
    return 6;
  }
}
//Esto suma las horas que dormiste en la semana
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

//Esto calcula la cantidad de horas que DEBERIAS dormir por semana
function getIdealSleepHours() {
  let idealHours = 8;
  return idealHours *= 7;
}
//Esto calcula e imprime si debiste o no horas de sueño en tu semana
function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('The user got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('The user got more sleep than needed. He slept ' + (actualSleepHours - idealSleepHours) + ' hours more than the ideal amount.');
  } else {
    console.log('The user should get some rest. He slept ' + (idealSleepHours - actualSleepHours) + ' hours less than the ideal amount.');
  }
}
calculateSleepDebt();
