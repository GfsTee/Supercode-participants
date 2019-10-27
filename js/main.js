// 'use strict';
var result = document.getElementById("result");
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
    }
var res1 = document.getElementById("result1");


function check() {
    var checkboxes = document.querySelectorAll('input[name="name"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
    shuffle(values);
    console.log(values);
    var group = document.getElementById("groups").value;
    console.log("Groups:" + group);
    var parGroup = Math.floor(values.length/group);
    console.log("Teilnehmer/Gruppe:" + parGroup);
    result.innerHTML = "";
    for (let j = 1; j<=group; j++) {
        for (let k = 1; k<=parGroup; k++) {
            result.innerHTML += `<p><strong>Gruppe ${j}:</strong> ${values.pop()}</p>`;
        }
    }
    while (values.length > 0) {
        result.innerHTML += `<p class="rest">${values.pop()} hat leider keine Gruppe gefunden.</p>`
    }
}
