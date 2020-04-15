var lis = document.querySelectorAll('li');
console.log("hello");
for(var i=0; i<lis.length;i++){
    lis[i].addEventListener('mouseover', function(){
        this.classList.add('color-class');
    });
    lis[i].addEventListener('mouseout', function(){
        this.classList.remove('color-class');
    });
    lis[i].addEventListener('click', function(){
        this.classList.toggle('click-class');
    });
}