let _main_menu = ['About project', 'The book', 'Galary', '4', '5', '6'];


let _cash_item_number = localStorage.getItem("cash_item_number") != null ? localStorage.getItem("cash_item_number") : 0;
let _book_cash_page_number = localStorage.getItem("book_cash_page_number") != null ? localStorage.getItem("book_cash_page_number") : 0;
let _book_cash_page_scrolltop = localStorage.getItem("book_cash_page_scrolltop") != null ? localStorage.getItem("book_cash_page_scrolltop") : 0;

for (let i = 0; i < _main_menu.length; i++)
    {
        main_menu.innerHTML += '<div class = "menu_link" id = "menu_link_' + i +'" onclick = "main_menu_items(' + i +')" title = "' + _main_menu[i] + '">' + _main_menu[i] + '</div>';
    }

function main_menu_items(_item)
{
    //main_menu.innerHTML = _main_menu;
    
    //item_marker(_item);

    localStorage.setItem("cash_item_number", _item);

    if(_item == 0)
    {
        about();
        //alert(menu_link_1.className == "menu_link_active");
    }

    if(_item == 1)
    {
        menu_link_1.className == "menu_link" ? book() + book_scroll_load() : null;
    }

    if(_item == 0)
    {
       // tester(1);
    }

    if(_item == 0)
    {
        //tester(1);
    }

    if(_item == 0)
    {
        //tester(1);
    }
    
    if(_item == 0)
    {
        //tester(1);
    }

    item_marker(_item);
}

function item_marker(_item)
{
    let _item_list = document.querySelectorAll('#main_menu div');
    for (let i = 0; i < _item_list.length; i++)
    {
        document.getElementById(_item_list[i].id).className = "menu_link";
    }
    document.getElementById(_item_list[_item].id).className = "menu_link_active";
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


setInterval(() => 
    {
        if(menu_link_1.className == "menu_link_active")
        {
            if(tester.textContent != book_pages.scrollTop)
            {
                localStorage.setItem("book_cash_page_scrolltop", book_pages.scrollTop);
                tester.innerHTML = book_pages.scrollTop;
            }
        }
    }, 1000);