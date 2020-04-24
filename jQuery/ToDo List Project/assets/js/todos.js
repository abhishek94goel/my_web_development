// Check Off specific To-Dos by clicking
$('ul').on('click','li',function(){
    $(this).toggleClass("completed");
});

// Click on X to delete ToDo
$("ul").on('click','li span', function(event){      // "li span" or "span" both will work. Basically we want to trigger the event when 'span' inside the 'ul' is clicked
    $(this).parent().fadeOut(500,function(){
        $(this).remove();   // (this) object in inline functions refers to the current object of the function
                            // so here (this) refers to the 'li' element (which is the "parent() of Span")
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li> <span><i class='fas fa-trash-alt'></i></span> " + todoText + " </li>");
    }
});

$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle();
})