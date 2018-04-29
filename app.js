// console.log("hello world too");
// console.log(process.argv);
// var a = process.argv[2];
// var b = process.argv[3];
// console.log(parseFloat(a) + parseFloat(b));
// console.log(a === b);

var first = parseFloat(process.argv[2]); //13
var second = parseFloat(process.argv[3]); // 6
//console.log(first);
//console.log(second);
var sum = 0;
//debugger;
for(var i = second; i < first; i+= second)
{
    sum += i;
    //console.log(sum);
    //console.log(i);
}

console.log(sum);