let _main_menu = ['About project', 'The book', 'Characters', 'Gallery', '5', 'Achievements'];


let _cash_item_number = localStorage.getItem("cash_item_number") != null ? localStorage.getItem("cash_item_number") : 0;
let _book_cash_page_number = localStorage.getItem("book_cash_page_number") != null ? localStorage.getItem("book_cash_page_number") : 0;
let _book_cash_page_scrolltop = localStorage.getItem("book_cash_page_scrolltop") != null ? localStorage.getItem("book_cash_page_scrolltop") : 0;
let _book_cash_contents_scrollmenu = localStorage.getItem("book_cash_contents_scrollmenu") != null ? localStorage.getItem("book_cash_contents_scrollmenu") : 0;

for (let i = 0; i < _main_menu.length; i++)
    {
        main_menu.innerHTML += '<div class = "menu_link target" id = "menu_link_' + i +'" onclick = "main_menu_items(' + i +')" title = "' + _main_menu[i] + '">' + _main_menu[i] + '</div>';
    }

function main_menu_items(_item)
{

    localStorage.setItem("cash_item_number", _item);

    if(_item == 0)
    {
        menu_link_0.className == "menu_link target" ? about() : null;
    }

    if(_item == 1)
    {
        menu_link_1.className == "menu_link target" ? book() + book_scroll_load() : null;
    }

    if(_item == 2)
    {
        menu_link_2.className == "menu_link target" ? characters() : null;
    }

    if(_item == 3)
    {
        menu_link_3.className == "menu_link target" ? gallery() : null;
    }
    
    if(_item == 4)
    {
        //tester(1);
    }
    
    if(_item == 5)
    {
        menu_link_5.className == "menu_link target" ? achievements() : null;
    }

    item_marker(_item);
}

function item_marker(_item)
{
    let _item_list = document.querySelectorAll('#main_menu div');
    for (let i = 0; i < _item_list.length; i++)
    {
        document.getElementById(_item_list[i].id).className = "menu_link target";
    }
    document.getElementById(_item_list[_item].id).className = "menu_link_active target";
}

//////////////////////////////////////////////////////////////////////---viewer---//////////////////////////////////////////////////////////////////
function view_on()
{
    imager.className = " ";
}

function view_off()
{
    imager.className = "imager";
}


main_menu_items(_cash_item_number);



//////////////////////////////////---~ TESTER ~---////////////////////////////////////



tester.innerHTML = '<div id = "tester_scroll_top">_scroll_top ~ ...</div>' +
                   '<div id = "tester_scroll_menu">_scroll_menu ~ ...</div>' +
                   '<div id = "tester_position_key_item">_position_key_item ~ ...</div>' +
                   '<div id = "tester_position_cursor">_position_cursor ~ ...</div>' +
                   '<div id = "tester_screen_height">_screen_height ~ ...</div>';

let _scroll_top = 0;
setInterval(() => 
    {
        if(menu_link_1.className == "menu_link_active target")
        {
            if(_scroll_top != book_pages.scrollTop )
            {
                localStorage.setItem("book_cash_page_scrolltop", book_pages.scrollTop);
                _scroll_top = book_pages.scrollTop;
                tester_scroll_top.innerHTML = "_scroll_top ~ " + _scroll_top;//////////////////////////////////////
            }
        }
    }, 1000);

let _scroll_menu = 0;
setInterval(() => 
    {
        if(menu_link_1.className == "menu_link_active target")
        {
            if(_scroll_menu != book_contents.scrollTop)
            {
                localStorage.setItem("book_cash_contents_scrollmenu", book_contents.scrollTop);
                _scroll_menu = book_contents.scrollTop;
                tester_scroll_menu.innerHTML = "_scroll_menu ~ " + _scroll_menu;//////////////////////////////////////
            }
        }
    }, 1000);

/* let _position_key_item = 0;
setInterval(() => 
    {
        if(menu_link_1.className == "menu_link_active")
        {
            tester_position_key_item.innerHTML = '_position_key_item ~ ' + Math.round(tester_key_item.getBoundingClientRect().top);
            //tester_position_key_item.style.cssText = "color: #f00; text-shadow: 0 0 4px #f00;"
        }
    }, 1000); */



/* let _screen_height = 0;
setInterval(() => 
{
    if(menu_link_1.className == "menu_link_active")
    {
        tester_screen_height.innerHTML = book_pages.offsetHeight;
        if(Math.round(tester_key_item.getBoundingClientRect().top) < book_pages.offsetHeight + Math.round(book_pages.getBoundingClientRect().top) && Math.round(tester_key_item.getBoundingClientRect().top) > book_pages.getBoundingClientRect().top)
        {
            tester_position_key_item.style.cssText = "color: #f00; text-shadow: 0 0 4px #f00;";
        }
        else
        {
            tester_position_key_item.style.cssText = "color: #0f0; text-shadow: 0 0 4px #0f0;";
        }
    }
}, 200); */