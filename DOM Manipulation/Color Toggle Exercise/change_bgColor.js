var button = document.querySelector("button")
var isCrimson = false;
// button.addEventListener("click",function(){                      
//                                 if(isCrimson){
//                                         document.body.style.background="white";
//                                 }
//                                 else{
//                                         document.body.style.background="crimson";
//                                 }
//                                 isCrimson = !isCrimson;                                
//                                 }
//                         );

// Second Method

button.addEventListener('click', function(){
                                        document.body.classList.toggle('extra_class')
                                }
                        );