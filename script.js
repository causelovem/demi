/*BUTTONS TO GO*/
$(document).ready(function()
{
    $('#contactsNavButton').click( function()
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

/*TRANSFER*/
// var fromTransfer = '', whereTransfer = '';

// function changeTransfer(id)
// {
//     if (id[id.length - 1] == 'F')
//     {
//         fromTransfer = id;
//         // $('#' + fromTransfer.slice(0, -1) + 'W').css("display", "none");
//     }
//     else
//     {
//         whereTransfer = id;
//         // $('#' + fromTransfer.slice(0, -1) + 'F').css("display", "none");
//     }

//     $('.transfer' + id[id.length - 1]).css({'box-shadow': ''});
//     $('#' + id).css({'box-shadow': '0 0 0 6px #B6D1DF'});
// }

// function hoveroverFW(id)
// {
//     if ((id == fromTransfer) || (id == whereTransfer))
//         return;

//     $('#' + id).css({'box-shadow': '0 0 0 6px #DBDCDE'});
// }

// function hoveroutFW(id)
// {
//     if ((id == fromTransfer) || (id == whereTransfer))
//         return;

//     $('#' + id).css({'box-shadow': ''});
// }
/*******/

                    // <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                    // <div class="transferFromColom">
                    //     <div class="transferDestTitle" id="from">
                    //         <h5>Откуда</h5>
                    //     </div>

                    //     <div class="transferF" id="st-marinoF" onclick="changeTransfer(id)" onmouseover="hoveroverFW(id)" onmouseout="hoveroutFW(id)">
                    //         <h3>Сан-Марино</h3>
                    //     </div>
                    //     <div class="transferF" id="riminiF" onclick="changeTransfer(id)" onmouseover="hoveroverFW(id)" onmouseout="hoveroutFW(id)">
                    //         <h3>Римини</h3>
                    //     </div>
                    //     <div class="transferF" id="boloniaF" onclick="changeTransfer(id)" onmouseover="hoveroverFW(id)" onmouseout="hoveroutFW(id)">
                    //         <h3>Болонья</h3>
                    //     </div>
                    //     <div class="transferF" id="rg-markeF" onclick="changeTransfer(id)" onmouseover="hoveroverFW(id)" onmouseout="hoveroutFW(id)">
                    //         <h3>Регион Марке</h3>
                    //     </div>
                    // </div>

                    // <div class="transferWhereColom">
                    //     <div class="transferDestTitle" id="where">
                    //         <h5>Куда</h5>
                    //     </div>
                        
                    //     <div class="transferW" id="st-marinoW" onclick="changeTransfer(id)" onmouseover="hoveroverFW(id)" onmouseout="hoveroutFW(id)">
                    //         <h3>Сан-Марино</h3>
                    //     </div>
                    //     <div class="transferW" id="riminiW" onclick="changeTransfer(id)" onmouseover="hoveroverFW(id)" onmouseout="hoveroutFW(id)">
                    //         <h3>Римини</h3>
                    //     </div>
                    //     <div class="transferW" id="boloniaW" onclick="changeTransfer(id)" onmouseover="hoveroverFW(id)" onmouseout="hoveroutFW(id)">
                    //         <h3>Болонья</h3>
                    //     </div>
                    //     <div class="transferW" id="rg-markeW" onclick="changeTransfer(id)" onmouseover="hoveroverFW(id)" onmouseout="hoveroutFW(id)">
                    //         <h3>Регион Марке</h3>
                    //     </div>
                    // </div>

                    // <div class="transferPrice">
                    //     <h2>price$</h2>
                    // </div> -->