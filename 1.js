let _main_menu = 
                    '<div class = "menu_link" id = "menu_link_1" onclick="main_menu_items(0)">О проекте</div>' +
                    '<div class = "menu_link" id = "menu_link_2" onclick="main_menu_items(1)">Книга</div>' +
                    '<div class = "menu_link" id = "menu_link_3" onclick="main_menu_items(2)">menu link 3</div>' +
                    '<div class = "menu_link" id = "menu_link_4" onclick="main_menu_items(3)">menu link 4</div>' +
                    '<div class = "menu_link" id = "menu_link_5" onclick="main_menu_items(4)">menu link 5</div>';


let _cash_item_number = localStorage.getItem("cash_item_number") != null ? localStorage.getItem("cash_item_number") : 0;
let _book_cash_page_number = localStorage.getItem("book_cash_page_number") != null ? localStorage.getItem("book_cash_page_number") : 0;




function main_menu_items(_item)
{
    main_menu.innerHTML = _main_menu;
    item_marker(_item);

    
    localStorage.setItem("cash_item_number", _item);

    if(_item == 0)
    {
        tester(1);
    }

    if(_item == 1)
    {
        book();
    }

    
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
