function isEven(num){
  if(num%2==0)
    return true;
  else
    return false;
}

function factorial(num){
  if(num==0)
    return 0;
  else if (num==1)
    return 1;
  else{
    fact = 1;
    for(var i=1; i<=num; i++)
    {
      fact = fact*i;
    }
    return fact;
  }
}

function kebabToSnake(str){
  var Newstr = str.replace(/-/g, "_");
  return Newstr;
}

alert("We will check the number for even or odd first !")
var number = Number(prompt("Enter the number : "));
if(isEven(number))
  console.log("Number is Even !");
else
  console.log("Number is Odd");

alert("Now we will calculate the factorial of a number !")
var number = Number(prompt("Enter the number : "));
console.log("Factorial of number " + number + " is " + factorial(number))

alert("Now we will do the Kebab to Snake of the string !")
var str = prompt("Enter the string : ");
console.log("Kebab to Snake of the string is : " + kebabToSnake(str));
