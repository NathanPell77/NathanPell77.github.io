function updateDateTime() {
    const d = new Date();

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const day = days[d.getDay()];
    const options = {day: 'numeric', month: 'long', year: 'numeric', };
    const formattedTime = d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', second: '2-digit'});
    const formattedDate = d.toLocaleDateString(undefined, options);
    const displayDate = `It's currently ${formattedTime} on ${day}, ${formattedDate}`;

    document.getElementById("datetime").textContent = displayDate;
}

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

document.getElementById('Motivation').addEventListener('submit', function(event){

    document.getElementById('motivationImage').style.display = 'block';
});

document.getElementById('extraPercent').addEventListener('submit', function(event){

    event.preventDefault();
    var userNum = Math.abs(Math.round(document.getElementById('num').value));
    const discList = ["nothing", ".01 percent", ".05 percent", "1 percent", ".03 percent", ".5 percent", "1 percent", ".75 percent", ".09 percent", ".4 percent", ".8 percent"];
    const disc = discList[userNum];
    document.getElementById('userNum').innerHTML = disc;
    document.getElementById('extraMessage').style.display = 'block';
});

document.getElementById('emailForm').addEventListener('submit', function(event) {

    event.preventDefault();
    const contact = document.getElementById('email').value;
    document.getElementById('contactEmail').innerHTML = contact;
    document.getElementById('contactMessage').style.display = 'block';
});

updateDateTime();
setInterval(updateDateTime, 1000);