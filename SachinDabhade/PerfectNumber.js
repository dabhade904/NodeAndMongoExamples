function perfectNumber(){
    var sum=0,i,num=6;
    for(i=1;i<num;i++){
        if(num%i==0)
        {
            sum=sum+i;
        }
    }
    if(num==sum){
        console.log("is a perfect number"+num);
    }else
    {
        console.log("is not perfect number"+num);
    }

}
perfectNumber()