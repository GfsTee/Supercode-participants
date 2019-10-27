// 'use strict';
var result = document.getElementById("result");
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}
var res1 = document.getElementById("result1");
var res2 = document.getElementById("result2");
var res3 = document.getElementById("result3");
var res4 = document.getElementById("result4");
var res5 = document.getElementById("result5");


function check() {
    var checkboxes = document.querySelectorAll('input[name="name"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    }); 
    shuffle(values);
    var group = document.getElementById("groups").value;
    var parGroup = Math.floor(values.length/group);
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
