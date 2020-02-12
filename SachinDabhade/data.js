    var result= require('./ex.json')
    // var d=JSON.stringify(files);
    // var obj=Object.keys(d);

    // for (var i=0;i<obj.length;i++)
    // {
    //     console.log(d[obj[i]]);
    // }

    //var obj = JSON.stringify(result);
    var keys = Object.keys(result);
    for (var i = 0; i < keys.length; i++) {
    console.log(result.student[0].xyz);
    console.log(result.student[1].awe);

}