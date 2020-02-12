// var fs= require("fs");
// var data=fs.readFileSync('test.txt');
// console.log(data.toString());
// console.log("Program ended");

var fs=require("fs");
fs.readFile('test.txt',function(err,data){
    if(err)
        console.error(err);
        console.log(data.toString());

});
console.log("Prpgram ended");
