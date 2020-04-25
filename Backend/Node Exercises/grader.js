function average(arr){
    sum = 0
    /*for(var i=0 ; i < arr.length ; i++){
        sum+=arr[i];*/
    arr.forEach(function(element){
        sum+=element;
        });
    avg_score = Math.round(sum/arr.length)
    return avg_score;
}

console.log(average([0,1,2,3,4,5,6,7,8,9]));