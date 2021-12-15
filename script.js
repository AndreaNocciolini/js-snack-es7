// Partendo da questo array, aggiungiamo a  tutti gli elementi la proprieta age aggiungendo un numero casuale da 3 a 50.
const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

for (let i = 0; i < arrayObj.length; i++) {
    const element = arrayObj[i];
    element.age = Math.floor(Math.random() * 50) + 3;
    document.getElementById(`container`).innerHTML += `
        <div class="red">Name: ${element.name}</div>
        <div class="blue">Type: ${element.type}</div>
        <div>Color: ${element.color}</div>
        <div class="green">Age: ${element.age}</div>
    `
}
console.log(arrayObj)

