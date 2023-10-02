const now = new Date();
const currentDateTime = now.toLocaleString();
console.log(currentDateTime);


document.getElementById('moodForm').addEventListener('submit', function(event) {

    event.preventDefault();
    const userName = document.getElementById('name').value;
    document.getElementById('userName').innerHTML = userName;
    const userMood = document.getElementById('mood').value;
    document.getElementById('userMood').innerHTML = userMood;
    document.getElementById('greetingMessage').style.display = 'block';
});

document.getElementById('shapeNum').addEventListener('submit', function(event){

    event.preventDefault();
    var userNum = Math.abs(Math.round(document.getElementById('num').value));
    const shapeList = ["Not a Shape", "henagon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    const shape = shapeList[userNum];
    document.getElementById('userNum').innerHTML = shape;
    document.getElementById('shapeMessage').style.display = 'block';
});

document.getElementById('discount').addEventListener('submit', function(event){

    event.preventDefault();
    var price = document.getElementById('employees').value;
    if (price > 100) {
        price = 100;
    }
    document.getElementById('price').innerHTML = price * .065;
    document.getElementById('discountMessage').style.display = 'block';
});

document.getElementById('penguinWings').addEventListener('submit', function(event){

    event.preventDefault();
    var wings = document.getElementById('wingsNum').value;
    document.getElementById('wings').innerHTML = wings
    document.getElementById('wingsMessage').style.display = 'block';
});

document.getElementById('penguinTypes').addEventListener('submit', function(event){

    event.preventDefault();
    var types = document.getElementById('penguinNumTypes').value;
    document.getElementById('types').innerHTML = types;
    document.getElementById('typesMessage').style.display = 'block';
});

document.getElementById('penguinFreshAndClean').addEventListener('submit', function(event) {

    event.preventDefault();
    const penguinFresh = document.getElementById('fresh').value;
    document.getElementById('userFresh').innerHTML = userFresh;
    const penguinClean = document.getElementById('clean').value;
    document.getElementById('userClean').innerHTML = userClean;
    document.getElementById('penguinF&CMessage').style.display = 'block';
});