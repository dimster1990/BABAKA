let _menu_item_ = [
    '<div class = "reader"><div id = "side_image" onclick = "view_on()"><div id = "side_image_inside"></div></div><div id = "pages"></div><div id = "side_titles"></div></div>',
    '<h1>Item_2</h1',
    '<h1>Item_3</h1',
    '<h1>Item_4</h1',
    '<h1>Item_5</h1',
];


let _cash_item_number = localStorage.getItem("cash_item_number") != null ? localStorage.getItem("cash_item_number") : 0;
let _cash_page_number = localStorage.getItem("cash_page_number") != null ? localStorage.getItem("cash_page_number") : 0;




function menu_itamer(_item)
{
    item_marker(_item);

    content.innerHTML = _menu_item_[_item];
    localStorage.setItem("cash_item_number", _item);

    if(_item == 0)
    {
        _cash_page_number = localStorage.getItem("cash_page_number") != null ? localStorage.getItem("cash_page_number") : 0;
        side_titles.innerHTML = _menu_page;
        menu_pager(_cash_page_number);
    }

    if(_item == 1)
    {
        tester(1);
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




//////////////////////////////////////////////////////////////////////---item_1---//////////////////////////////////////////////////////////////////
function menu_pager(_page)
{
    pages.innerHTML = _page_[_page];
    localStorage.setItem("cash_page_number", _page);
    page_marker(_page);
    pages.scrollTo({top: 0,behavior: 'smooth'});

    imager.style.cssText = side_image_inside.style.cssText = side_image.style.cssText = "background-image : url(images/image_" + _page + ".png)";
}

function page_marker(_page)
{
    let _page_list = document.querySelectorAll('#contents_links div');

    for (let i = 0; i < _page_list.length; i++)
    {
        document.getElementById(_page_list[i].id).className = "menu_link_page";
    }
    document.getElementById(_page_list[_page].id).className = "menu_link_page_active";
}

function changer()
{
    side_image_inside.style.cssText = side_image.style.cssText = "background-image : url(images/image_2.png)";
}

//////////////////////////////////////////////////////////////////////---item_2---//////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////---viewer---//////////////////////////////////////////////////////////////////
function view_on()
{
    imager.className = " ";
}

function view_off()
{
    imager.className = "imager";
}


menu_itamer(_cash_item_number);
