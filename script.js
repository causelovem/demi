/*BUTTONS TO GO*/
$(document).ready(function()
{
    $('#contactsButton').click( function()
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) 
        {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});

$(document).ready(function()
{
    $('#aboutButton').click( function()
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) 
        {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});

$(document).ready(function()
{
    $('#serviceButton').click( function()
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) 
        {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});

$(document).ready(function()
{
    $('#moreButton').click( function()
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) 
        {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});

$(document).ready(function()
{
    $('#shoppingPreview').click( function()
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) 
        {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});

$(document).ready(function()
{
    $('#transferPreview').click( function()
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) 
        {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});

$(document).ready(function()
{
    $('#cargoPreview').click( function()
    {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) 
        {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});

// function goToBlockByID(id)
// {
//     $('#' + id).click( function()
//     {
//         var scroll_el = $(this).attr('href');
//         if ($(scroll_el).length != 0) 
//         {
//             $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
//         }
//         return false;
//     });
// }
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

/*TRANSFER*/
var fromTransfer = '', whereTransfer = '';

function changeTransfer(id)
{
    if (id[id.length - 1] == 'F')
    {
        fromTransfer = id;
        // $('#' + fromTransfer.slice(0, -1) + 'W').css("display", "none");
    }
    else
    {
        whereTransfer = id;
        // $('#' + fromTransfer.slice(0, -1) + 'F').css("display", "none");
    }

    $('.transfer' + id[id.length - 1]).css({'box-shadow': ''});
    $('#' + id).css({'box-shadow': '0 0 0 6px #B6D1DF'});
}

function hoveroverFW(id)
{
    if ((id == fromTransfer) || (id == whereTransfer))
        return;

    $('#' + id).css({'box-shadow': '0 0 0 6px #DBDCDE'});
}

function hoveroutFW(id)
{
    if ((id == fromTransfer) || (id == whereTransfer))
        return;

    $('#' + id).css({'box-shadow': ''});
}
/*******/