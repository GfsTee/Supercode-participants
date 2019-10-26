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
function calc() {
    var part = Number(document.getElementById("participants").value);
    var group = Number(document.getElementById("groups").value);
    var parGroup = Math.floor(part/group);
    var k;
    console.log(parGroup);
    result.innerHTML = "";
    if (group > part) {
        result.innerHTML = "Das ist leider nicht zu berechnen";
    } else {
        var partArray = []
        for (let i = 1; i <= part; i++) {
            
            partArray.push(i);
            shuffle(partArray);
        }
        shuffle(partArray);
        for (let j = 1; j<=group; j++) {
            for (k = 1; k<=parGroup; k++) {
                result.innerHTML += `<p>Gruppe ${j}: Teilnehmer ${partArray.pop()}</p>`
            }
        }
        while (partArray.length > 0) {
            result.innerHTML += `<p class="rest"> Teilnehmer ${partArray.pop()} muss leider so verteilt werden :/</p>`
        }
    }
}