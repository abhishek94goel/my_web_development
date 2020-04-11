alert("First exercise is the printing of reverse of an array !");

var array = [];

function showArray()
{
  array.forEach(function(element){
    console.log(element);
  });
}

function reverse_print(){
  var i = array.length - 1;
  for (i; i>=0; i--)
  {
    console.log(array[i]);
  }
}

function isUniform(){
  var char = array[0];
  var flag = true;
  array.forEach(function(element){
    if(element!=char)
    {
      flag=false;
    }
  });
  if(flag){
    console.log("Uniform Array");
  }
  else{
    console.log("Not Uniform Array");
  }
}

function sumArray(){
  var sum= 0.0;
  array.forEach(function(element){
    sum = sum + Number(element);
  });

  console.log(sum);
}

function maxElement(){
  var max = array[0];
  array.forEach(function(element){
    if(element > max)
      max = element;
  });
console.log("Max element of the Array is : " , max);
}

for(var i=0; i<5 ; i++){
  array.push(prompt("Enter" + (i+1) + " element to add in the array"));
}

console.log("Original Array is :");
showArray();

console.log("**************");
console.log("Reversed Array is :");
reverse_print();

console.log("**************");
console.log("Check if array elements are uniform or not :");
isUniform();

console.log("**************");
console.log("Sum of array elements is:");
sumArray();

console.log("**************");
console.log("Max element of Array:");
maxElement();
