var age = Number(prompt("Enter your age please!"));

if (age<=0){
  console.log("Age is not correct. Either there is no birth !");
}
else{
  if(age==21)
  {
    console.log("Happy 21st Birthday !");
  }
  if(age%2!=0)
  {
    console.log("Your age is odd currently, I wish you to get Even soon :)");
  }
  if(age%Math.sqrt(age)==0)
  {
    console.log("Your age is a perfect square number ...HOLA !!!");
  }
}
