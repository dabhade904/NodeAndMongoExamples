import 
function arrrayExample(){
    let arr=[1,2,4,52,6,7,8]
    var large=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>large)
        {
            large=arr[i];
        }

    }
    return large;
}
//arrrayExample()
function array(){
console.log("the largest number is "+arrrayExample());
}
array()