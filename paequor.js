// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (number, array15bases) => {
  return {
    specimenNum: number,
    dna: array15bases,
// Metodo que selecciona de manera random un index de array15bases y que cambia su valor por un index random de dnabases que no tenga el mismo valor que el que tenia el index originalmente    
    mutate() {
     let randomIndex = Math.floor(Math.random() * this.dna.length);
     let randomBase = ''
     
     do {
       randomBase = returnRandBase();
     }
      while (randomIndex === randomBase);
      
      if(randomIndex !== randomBase) {
        this.dna.splice(randomIndex, 1, randomBase);
      }
        return this.dna;  
    },
// Otro metodo que toma a otro objeto de paeqor como parametro y compara el dna de un objeto con el del objeto pasado como parametro. se computan cuantas bases son identicas Y en el mismo index. el metodo returns un consolelog que dice el porcentaje de similaritud entre los dos dna   
    compareDNA(object) {
   let identicalCases = 0;
for (let i = 0; i < this.dna.length; i++) {
  for (let j = 0; j < object.dna.length; j++) {
    if ((this.dna[i] === object.dna[j]) && i === j) {
      identicalCases++;
    }
  }
}; 
      let percentageDNA = (identicalCases / this.dna.length)*100;
      return `Both DNA strands have ${percentageDNA}% DNA in common`   
    },
// Ahora creo un metodo que me dice si el objeto va a sobrevivir, me devuelve un booleano. Para eso, su DNA tiene que estar conformado con, al menos, un 60% de bases C o G.    
    willLikelySurvive() {
      let strongDNA = 0;
      let strongPercentage = 60 * this.dna.length /100;
      for (let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === 'C' || this.dna[i] === 'G') {
          strongDNA++;
        }
      }
      if(strongDNA  >= strongPercentage) {
        return true;
      } else {
        return false;
      }
    },
// Creo un metodo que returns el DNA strand complementario al strand original del objeto. Una A matchea con una T, y una C matchea con una G 
    complementStrand() {
    let complementDNA = [];
      for (let i = 0; i < this.dna.length; i++) {
    switch(this.dna[i]) {
  case 'A':
    complementDNA.push('T');
    break;
  case 'T':
     complementDNA.push('A');
    break;
  case 'C':
     complementDNA.push('G');
    break;
  case 'G':
     complementDNA.push('C');
    }  
  }
   return complementDNA;   
    }
  }
};
// Creo dos objetos para compararlos
const pAequor1 =  pAequorFactory(1, mockUpStrand());
const pAequor2 =  pAequorFactory(2, mockUpStrand());

// PRUEBAS: Imprimo mensajes de prueba para ver si todo marcha bien 
console.log(pAequor1);
console.log(pAequor1.complementStrand());
console.log(pAequor2);
console.log(pAequor2.complementStrand());
console.log('ESPACIO PUBLICITARIO');
console.log(pAequor1.compareDNA(pAequor2));
console.log(pAequor1.mutate());
console.log(pAequor1.willLikelySurvive());

/*
  Por ultimo, tengo que crear 30 pAequors que pueden sobrevivir. Luego los almaceno en un array.
  Para eso lo que hago es un loop do...while. En el cual, mientras no haya 30 muestras capaces de sobrevivir, no se paran de testear muestras.
  Hago un array vacio, donde voy a almacenar las pruebas exitosas. Luego creo un loop en el cual, se crea una variable que hace un paequor. Si este paequor puede sobrevivir, se lo agrega al array y el contador de pruebas exitosas sube. 
  Y asi se repite el proceso hasta que este contador llega a 30. Mientras tanto, el otro contador, que sigue las cantidades de muestras que se hacen, sube desinteresadamente, no le importa si la muestra sobrevive o no, por eso la variable "testeo" no esta dentro del if
*/
let studyArr = [];
let cantMuestras = 0;
let testeo = 1;
let nrosExitosos= 0;
do {
  let pruebaLabo =  pAequorFactory(testeo, mockUpStrand());
  testeo++;
  if(pruebaLabo.willLikelySurvive() === true) {
  nrosExitosos++;  
  cantMuestras++;  
    studyArr.push({PruebaNro: pruebaLabo.specimenNum,
                   ADN: pruebaLabo.dna,
                   PruebaExitosaNro: nrosExitosos});
  }; 
     }
  while (30 > cantMuestras);

//Llamo a los 30 casos de estudio exitosos a la consola
console.log(studyArr);
