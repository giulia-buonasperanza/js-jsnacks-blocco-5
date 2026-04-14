const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'


people.forEach (function({name}){
  console.log(name);
});


/*people.forEach (function(nome){
  const {name} = nome;
  console.log(`${name}`);
});*/
