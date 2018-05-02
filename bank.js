var fs = require("fs");
//1, 2.33, 4.23, -2, -2, -.25, 5, 10, 5
var transaction = process.argv[2];
//console.log(transaction);

switch (transaction) {
    case "total":
        readTransaction();
        break;
    case "deposit":
        var amount = process.argv[3];
        addTransaction(amount);
        break;
    case "withdraw":
        var amount = process.argv[3];
        withdrawTransaction(amount);
        break;
    case "lotto":
        playLotto();
        break;

}

function readTransaction() {
    fs.readFile("bank.txt", "utf-8", function (err, data) {
        if (err) throw err;
        console.log(data);
        var sum = 0;
        var transactions = data.split(",");
        for (var i = 0; i < transactions.length; i++) {
            console.log("trans: " + transactions[i]);
            sum += parseFloat(transactions[i]);
        }
        console.log("Total: " + sum);
    });
}

function addTransaction(number) {
    fs.appendFile("bank.txt", ", " + number, "utf-8", function (err) {
        if (err) throw err;
        console.log("transaction got updated");
    })
}

function withdrawTransaction(number) {
    fs.appendFile("bank.txt", ", -" + number, "utf-8", function (err) {
        if (err) throw err;
        console.log("transaction got updated");
    })
}

function playLotto(){
    fs.appendFile("bank.txt", ", -.25", "utf-8", function(err){
        if(err) throw err;
        var rand = Math.floor((Math.random() * 10) + 1);
        if(rand === 1){
            addTransaction(10);
        }else{
            console.log("you just lost the lotto");
        }
    })
}