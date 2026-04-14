const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'


const  classeStudente = students.find (function (student){
  return student.name === 'Marco Lanci'
} ) 

console.log (classeStudente.class);

//Trovo l’oggetto con .find() (usando il nome come condizione)
// Poi accedo alla proprietà .class dell’oggetto trovato