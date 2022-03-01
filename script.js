var friendArr = [
    "Russ",
    "Mindy",
    "Nikki",
    "David",
    "Reid"
];
var friend = friendArr[i];
var locationArr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
];
var location = locationArr[i];
var objectArr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
];
var object = objectArr[i];

var accusation = ("I accuse " + friend + ", with the " + object + " in the " + location + "!");

window.addEventListener("DOMContentLoaded", function () {
    var accuseContainer = document.createElement("div");
    accuseContainer.className = 'container';
    for (var j = 0; j < 100; j++) {
        var accusationNum = document.createElement("h3");
        accusationNum.className = ("accusation " + j + "");
        accusationNum.innerText = ("Accusation " + j);
    };
    document.body.appendChild(accuseContainer);
    accuseContainer.appendChild(accusationNum);
    
    accusationNum.addEventListener("click", function () {
        alert(accusation);
    });
});