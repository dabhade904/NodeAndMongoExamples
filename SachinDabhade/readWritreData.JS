
// var fs = require('fs');

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
//  var re=JSON.stringify(student)
// var result=fs.readFileSync('./ex.json','utf8')
// fs.writeFileSync('student.json', result);
// //fs.writeFileSync('student.json',re);
const fs = require('fs');
//const content = JSON.stringify(output);

const result = JSON.stringify(student);
fs.writeFileSync('student.json', result,function(err){
//fs.writeFile('./ex.json', 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
