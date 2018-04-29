var fs = require("fs");
fs.writeFile("movies.txt", "Inception, Die Hard", function(err){
    if(err) throw err;
    console.log("file has been updated");
})