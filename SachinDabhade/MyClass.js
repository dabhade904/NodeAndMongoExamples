//Treat User Defined Class Instance To JSON String:
// function myClass(){
//     this.a='some value';
//     this.b={
//         'key':'another json structure'
//     };
// }
// var instance=new myClass();
// console.log(JSON.stringify(instance))

 // Delete An Element From A JSON Object:
//  var myJson = {'key':'value',
//                'sachin':'dabhade' 
//                 };
// delete myJson['key']
// console.log(myJson)

//Iterate Over A JSON Object:
var myjson={'name':'sachin','lname':'dabhade'}
for(var mykey in myjson ){
    console.log("key:" +mykey+",value:"+myjson[
        
    ])
}
