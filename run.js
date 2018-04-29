//var stuffINeed = require("./ess.js");
var group = require("./bands.js");
var bandName = process.argv[2];

var bands = group.bands;
// console.log(stuffINeed);
// console.log(stuffINeed.essentials);
// console.log(stuffINeed.nicetohaves);
// console.log(stuffINeed.noneessentials);
console.log(group);

for(var property in bands){
    if(bands.hasOwnProperty(property)) {
        //console.log(property);
        console.log("A " + property + " is " + bands[property]);
    }
}

for(var key in bands){
    console.log("A " + key + " is " + bands[key]);
}

console.log("Extra:\n");
for(var property in bands){
    if(bands.hasOwnProperty(property) && property === bandName){
        console.log("A " + property + " is " + bands[property]);
    }
}