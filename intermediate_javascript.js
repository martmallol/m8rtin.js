//CODE CHALLENGES: INTERMEDIATE JAVASCRIPT

/* 1. reverseArray()
Write a function, reverseArray(), that takes in an array as an argument and returns a new 
array with the elements in the reverse order.
*/
const reverseArray = sentence => {
    let reversed = [];
    for(let i = sentence.length - 1; i >= 0; i--) {
      reversed.push(sentence[i]);
    }
    return reversed;
}
  
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];


/* 2. greetAliens()
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to 
print a greeting with each string in the array.
The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”
*/
const greetAliens = aliens => {
    for(let i = 0; i < aliens.length; i++) {
      console.log('Oh powerful ' + aliens[i] + ', we humans offer our unconditional surrender!')
    }
}
    
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);


/* 3. convertToBaby()
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, 
returns a new array with each string in the array prepended with 'baby '.
*/
const convertToBaby = babies => {
    let converted = [];
    let i = 0;
    while(i < babies.length) {
      converted.push('baby ' + babies[i]);
      i++;
    }
    return converted;
}
  
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
console.log(convertToBaby(animals)) 


/* 4. Fix The Broken Code!
We wrote a function, smallestPowerOfTwo(), which takes in an array.
Within our function, we create a new array called results. We then loop through the argument
array and calculate the smallest power of two which is greater than the current element before
using .push() to add it to results.
*/
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]


/* 5. declineEverything() and acceptEverything()
Write a function declineEverything() that takes in an array of strings and, using .forEach(), 
loops through each element in the array and calls politelyDecline() with each of them.
The .forEach() function should apply politelyDecline() directly; it should NOT merely receive
an argument function that uses politelyDecline().
*/
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

//Lo que hace el forEach es que a cada elemento del array le ejecuta dicha funcion
const declineEverything = (arr) => arr.forEach(politelyDecline);
declineEverything(veggies);

const acceptEverything = (arr) => arr.forEach(elem => console.log('Ok, I guess I will eat some ' + elem + '.'));
acceptEverything(veggies);


/* 6. squareNums()
Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns 
an array with the square of each of the elements of that array.
*/
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = arr => arr.map(toSquare);

console.log(numbers);
console.log(squareNums(numbers));


/* 7. shoutGreetings()
Write a function shoutGreetings() that takes in an array of strings and returns a new array. 
This new array should contain all the strings from the argument array but with capitalized 
letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'
*/
const shoutGreetings = string => string.map(elem => elem.toUpperCase() + '!');

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]


/* 8. sortYears()
Write a function sortYears() that takes in an array of years, and, using the built-in 
.sort() method, returns that array with the years sorted in descending order.
*/
const sortYears = arr => arr.sort().reverse();

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]


/* 9. sortYears()
Write a function justCoolStuff() that takes in two arrays of strings, and, using the 
built-in .filter() method, returns an array with the items that are present in both arrays.
*/
const justCoolStuff = (arr1, arr2) => arr1.filter(elem => arr2.includes(elem));

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]


/* 10. isTheDinnerVegan()
Write a function isTheDinnerVegan() that takes in an array of food objects in the format:
{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely 
plant-based origins.
*/

//Sin metodo
/* const isTheDinnerVegan = food => {
    let i = 0; 
    let isVeganSoFar = true;
    while(i < food.length && isVeganSoFar) {
      isVeganSoFar = food[i].source == 'plant';
      i++;
    }
    return isVeganSoFar;
} */

//Con metodo
const isVegan = food => food.source == 'plant';

const isTheDinnerVegan = dinner => dinner.every(isVegan)

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false


/* 11. sortSpeciesByTeeth()
Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species 
possesses (numTeeth) .
You’ll need to access each object’s .numTeeth property. Feel free to either write a named 
comparison function, or use an anonymous function for your argument to .sort()
*/
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort(fewerTeeth);

const fewerTeeth = (a, b) => a.numTeeth > b.numTeeth; 

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]


/* 12. findMyKeys()
Write a function, findMyKeys(), that takes in an array of strings which may or may not contain
'keys'. If the keys are in the array, your function should return the index at which they 
can be found. If they’re not in the array, your function should return -1.
*/
const findMyKeys = arr => arr.indexOf('keys')

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4


/* 13. dogFactory()
Write a function, dogFactory(). It should:
-have 3 parameters: name, breed, and weight (in that order)
-expect name and breed to be strings
-expect weight to be a number
-return an object
-have each of those parameters as keys on the returned object returned with the values of
the arguments that were passed in.
*/
const dogFactory = (name, breed, weight) => {
    //Devuelvo la clase
    return { 
      //Mis variables y sus operaciones
      //Operaciones con la variable 'name' 
      _name: name, //Mi variable privada
      get name() { //La funcion que me da cual es mi name
        return this._name;
      },
      set name(name) { //La funcion que me cambia el name
        if(typeof name === 'string') { //Tiene que estar tipado de la misma manera
          this._name = name;
        } else {
        return 'Pass in a valid name.'
        }
      }, 
      //Operaciones con la variable 'breed' 
      _breed: breed, //Mi variable privada
      get breed() { //La funcion que me da cual es mi breed
        return this._breed;
      },
      set breed(breed) { //La funcion que me cambia el breed
        if(typeof breed === 'string') { //Tiene que estar tipado de la misma manera
          this._breed = breed;
        } else {
        return 'Pass in a valid breed.'
        }
      },  
      //Operaciones con la variable 'weight'
      _weight: weight, //Mi variable privada
      get weight() { //La funcion que me da cual es mi weight
        return this._weight;
      }, 
      set weight(weight) { //La funcion que me cambia el breed
        if(typeof weight === 'number') { //Tiene que estar tipado de la misma manera
          this._weight = weight;
        } else {
        return 'Pass in a valid weight.'
        }
      },
      
      //Metodos de mi clase
      bark() {
        return 'ruff! ruff!';
      },
      eatTooManyTreats() {
        this._weight++;;
      }
  
    } 
}
  
  