//Creo un objeto de mi equipo. En el cual van a quedar registrados los jugadores que tiene, y su fixture
const team = {
//Aca creo el array de players, donde estaran los datos de los distintos jugadores. Sera un array con un objeto de jugador distinto en cada index. 
  _players: [
    {
  firstName: 'Juanfer',
  lastName: 'Quintero',
  age: 27
},
    {
  firstName: 'Enzo',
  lastName: 'Perez',
  age: 34
},
    {
  firstName: 'Matias',
  lastName: 'Suarez',
  age: 31
}
  ],
// Aca hago el mismo tipo de key que anteriormente, solo que cargo info de los partidos en vez de los jugadores.  
  _games: [
    {
  opponent: 'Binacional',
  teamPoints: 8,
  opponentPoints: 0
},
    {
  opponent: 'Atletico Tucuman',
  teamPoints: 1,
  opponentPoints: 1
},
    {
  opponent: 'Liga de Quito',
  teamPoints: 0,
  opponentPoints: 3
}
  ],
//No agrego setters porque no quiero que nadie cambie la informacion. Agrego getters para poder acceder a las keys como propiedades. Asi puedo acceder a ellas en el mismo codigo para agregarles cosas luego.
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
//Creo un metodo del objeto para añadir mas jugadores al key _players.
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },
// Nuevamente, creo un metodo del objeto para añadir en este caso mas partidos al key _games
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this.games.push(game);
  }
};
//Por ultimo pongo a prueba los metodos que cree para ver si realmente funcionan.
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
//Cargo a la consola para chequear que este todo joya.
console.log(team.players);
//Repito.
team.addGame('Defensa y Justicia', 1, 1);
team.addGame('Estudiantes', 2, 0);
team.addGame('Banfield', 1, 0);
//Repito.
console.log(team.games);
