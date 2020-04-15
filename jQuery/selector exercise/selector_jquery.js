$('div').css('backgroundColor','purple');

$('.highlight').css('width','200px');

$('#third').css({
    'border': 'orange 5px solid'
});

//Method 1 (CSS Selector: first-of-type)
$('div:first-of-type').css('color','white');

//Method 2 (jQeury method: first)
$('div:first').css('color', 'white');

//Method 3
$('div')[0].style.color = 'white';