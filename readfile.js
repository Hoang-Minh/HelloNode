var fs = require("fs");
//var fileName = "movies.txt";

function readAFile(fileName){
    fs.readFile(fileName, "utf-8", function(err, data){
        if(err) throw err;
        var arr = data.split(",");
        console.log("file: " + fileName);
        
        for(var i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    });    
}

readAFile("movies.txt");
readAFile("best_thing_ever.txt");