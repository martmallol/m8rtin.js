const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    return this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
    return this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts) {
    return this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts:this.desserts
    }
  },
  //Creo un metodo que agrega un plato a courses. Primero creo un objeto llamado dish.
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
   };
    //Luego usando .push, agrego el dish en el array apropiado de courses. Para eso uso parametros
   return this._courses[courseName].push(dish); 
  },
  //Ahora creo una funcion que me permite obtener un plato random de algun course del menu. 
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  //Ahora creo una funcion que me devuelve una three-course meal. Un menu completo random.
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('main');
    const dessert = this.getRandomDishFromCourse('dessert');
    const totalPrice = appetizer.price + main.price + dessert.price
    return  `You ordered ${appetizer.name} as your appetizer, then you chose ${main.name} as your main dish and you ended your evening with some ${dessert.name} as your prefered dessert. The total price was ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'empanada', 4);
menu.addDishToCourse('appetizers', 'sopa', 3);
menu.addDishToCourse('appetizers', 'ensalada', 5);

menu.addDishToCourse('mains', 'lomo', 9);
menu.addDishToCourse('mains', 'sorrentinos', 8);
menu.addDishToCourse('mains', 'milanesa', 7);

menu.addDishToCourse('appetizers', 'flan', 3);
menu.addDishToCourse('appetizers', 'cheese cake', 5);
menu.addDishToCourse('appetizers', 'lemon pie', 4);

const meal = menu.generateRandomMeal();

console.log(meal);
