var todolist =[];

var choice = prompt("Enter what to do !");

while(choice!=="quit" || choice!=="QUIT" || choice!=="Quit")
{
  if(choice==="new"){
    todolist.push(prompt("Enter the new item."));
  }
  else if(choice==="list"){
    console.log(todolist);
  }
choice = prompt("Enter what to do !");
}
console.log("Good Bye ...!");
