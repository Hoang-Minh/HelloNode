var fs = require("fs");
fs.appendFile("movies.txt", "Last Christmas again", "utf-8", function(err){
    if(err) throw er;
    console.log("file get updated");
})