/*BUTTONS TO GO*/
function goToBlockByID(id)
{
    var scroll_el = $('#' + id).attr('href');
    if ($(scroll_el).length != 0) 
    {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
}
/*******/

/*SHOPPING TOUR*/
var currentShopping = 'st-marinoShopping';
changeShopping(currentShopping);

function changeShopping(id)
{
    currentShopping = id;

    $('.shoppingTextBlock').css("display", "none");
    $('#' + id + 'Block').css("display", "block");

    $('.shoppingTab').css("backgroundColor", "");
    $('#' + id + 'Tab').css("backgroundColor", "#F2F3F3");

    $('.shoppingTab').css("border-top-color", "#DBDCDE");
    $('#' + id + 'Tab').css("border-top-color", "#B6D1DF");
}

function hoveroverTab(id)
{
    $('#' + id).css("border-top-color", "#B6D1DF");
}

function hoveroutTab(id)
{
    if (currentShopping + 'Tab' == id)
        return;

    $('#' + id).css("border-top-color", "#DBDCDE");
}
/*******/

$(document).ready(function()
{
    $('.contactsButton').click( function()
    {
        $('.transparentLayer').css("display", "block");
        $('.contactsFixed').css("display", "block");
    });
});

$(document).ready(function()
{
    $('.transparentLayer').click( function()
    {
        $('.transparentLayer').css("display", "none");
        $('.contactsFixed').css("display", "none");
    });
});

$(document).ready(function()
{
    $('.imgXhover').click( function()
    {
        $('.transparentLayer').css("display", "none");
        $('.contactsFixed').css("display", "none");
    });
});