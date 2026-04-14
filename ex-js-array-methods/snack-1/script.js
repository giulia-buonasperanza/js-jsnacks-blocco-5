const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


//forEach() mi sembra la soluzione più semplice.
names.forEach(function (name) {
    console.log(name);
});

//ma poi ho pensato anche alla join()
console.log(names.join(","));