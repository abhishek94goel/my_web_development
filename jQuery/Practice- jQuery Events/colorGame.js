$('button').click(function(){
    alert("button clicked !");
});

$('button').on('click',function(){
    var text = $(this).text();
    alert('Hey ' + text + '! Now we will change your background color.');
    $(this).css('backgroundColor','brown');
});

$("input[type='text']").keypress(function(event){
    console.log("Key entered in the textbox");
    console.log(event);
});

// jQuery Effects

$('button').on('mouseenter', function(){
    $(this).slideUp(500,function(){
    });
});

$('button').on('mouseleave', function(){
    $(this).slideDown(500,function(){
        alert("Wapas aa gaya !");
    });
});