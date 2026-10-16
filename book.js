const _book_page_ = 
[
    _chapter_the_death,
    _the_rebirth,
    _the_gunsmith,
    _the_boss,
];
let _book_page_name = 
[
    [
        "PROLOGUE",//cycle
        [
            "The death",//chapter         // 0
            "The rebirth"//chapter        // 1
        ]
    ],
    [
        "PEOPLE AROUND",
        [
            "The gunsmith",               //2
            "The boss"                    //3
        ]
    ],
    [
        "TROUBLES",
        [
            "Nice new place",             //4
            "The discord",                //5
            "Almost had it",              //6
            "Evening talk",               //7
            "Alive, once again",          //8
            "Kindness"                    //9
        ]
    ]
];
let _book_side_image_page = 0; 
let _book_side_image_id = [];
let _book_side_image_ids = 
[
    ["001_01_the_death"],           //chapter 0
    ["002_01_the_rebirth"],         //chapter 1
    ["no_image_available"],         //chapter 2
    ["no_image_available"],         //chapter 3
    ["no_image_available"],         //chapter 4
    ["no_image_available"],         //chapter 5
    ["no_image_available"],         //chapter 6
    ["no_image_available"],         //chapter 7
    ["no_image_available"],         //chapter 8
    ["no_image_available"]          //chapter 9
];
let _book_side_image_id_changer = 0;





function book()
{
    _book_side_image_id_changer = 0;
    content.innerHTML = _book;
    book_menu_content();

    _book_cash_page_number = localStorage.getItem("book_cash_page_number") != null ? localStorage.getItem("book_cash_page_number") : 0;
    book_menu(_book_cash_page_number);
}

function book_menu_content()
{
    let _book_page_number = 0;
    for (let _a = 0; _a < _book_page_name.length; _a++)
    {
        book_content_links.innerHTML += '<h4>' + _book_page_name[_a][0] + '</h4>'
        for (let _b = 0; _b < _book_page_name[_a][1].length; _b++)
        {
            book_content_links.innerHTML += '<div class = "menu_link_page" id = "page_list_' + _book_page_number + '"' + ' onclick = "book_menu(' + _book_page_number + ')">' + _book_page_name[_a][1][_b] + '</div>'
            _book_page_number += 1;
        }
    }
}




function book_menu(_page)
{
    book_pages.innerHTML = _book_page_[_page];
    localStorage.setItem("book_cash_page_number", _page);
    book_page_marker(_page);
    
    book_pages.scrollTo({top: 0,behavior: 'smooth'});

    _book_side_image_id = _book_side_image_ids[_page];

    imager.style.cssText = book_side_image_inside.style.cssText = book_side_image.style.cssText = "background-image : url(images/gallery/" + _book_side_image_id[0] + ".png)";
}

function book_page_marker(_page)
{
    let _page_list = document.querySelectorAll('#book_content_links div');

    for (let i = 0; i < _page_list.length; i++)
    {
        document.getElementById(_page_list[i].id).className = "menu_link_page";
    }
    document.getElementById(_page_list[_page].id).className = "menu_link_page_active";
}





function book_scroll_load()
{
    _book_cash_page_scrolltop = localStorage.getItem("book_cash_page_scrolltop") != null ? localStorage.getItem("book_cash_page_scrolltop") : 0;
    book_pages.scrollTo({top: _book_cash_page_scrolltop, behavior: 'smooth'});

    _book_cash_contents_scrollmenu = localStorage.getItem("book_cash_contents_scrollmenu") != null ? localStorage.getItem("book_cash_contents_scrollmenu") : 0;
    book_contents.scrollTo({top: _book_cash_contents_scrollmenu, behavior: 'smooth'});
}



let _book = `<div class = "book_reader">
                <div id = "book_side_image" onclick = "view_on()">
                    <div id = "book_side_image_inside"></div>
                </div>
                <div id = "book_pages"></div>
                <div id = "book_side_titles">
                    <div id = "book_contents">
                        <div class = "contents_text">Contents:</div>
                        <div id = "book_content_links"></div>
                    </div>
                </div>
            </div>`;


let _scroll_top = 0;/////////
let _position_key_item = 0;
let _screen_height = 0;
let _scroll_menu = 0;/////////
setInterval(() => 
{
    if(menu_link_1.className == "menu_link_active")
    {
        if(_scroll_top != Math.round(book_pages.scrollTop))
        {
            localStorage.setItem("book_cash_page_scrolltop", Math.round(book_pages.scrollTop));
            _scroll_top = Math.round(book_pages.scrollTop);
            tester_scroll_top.innerHTML = "_scroll_top ~ " + _scroll_top;//////////////////////////////////////
        }

        if(_scroll_menu != Math.round(book_contents.scrollTop))
        {
            localStorage.setItem("book_cash_contents_scrollmenu", Math.round(book_contents.scrollTop));
            _scroll_menu = Math.round(book_contents.scrollTop);
            tester_scroll_menu.innerHTML = "_scroll_menu ~ " + _scroll_menu;//////////////////////////////////////
        }
    
        for (let i = _book_side_image_id.length - 1; i >= 0; i--)
        {
            if (document.getElementById(_book_side_image_id[i]) && Math.round(document.getElementById(_book_side_image_id[i]).getBoundingClientRect().top) < book_pages.offsetHeight + Math.round(book_pages.getBoundingClientRect().top))
                {
                if (_book_side_image_id_changer != _book_side_image_id[i])
                {
                    imager.style.cssText = book_side_image_inside.style.cssText = book_side_image.style.cssText = "background-image : url(images/gallery/" + _book_side_image_id[i] + ".png)";
                    
                    _book_side_image_id_changer = _book_side_image_id[i];
                }
                break;
            }
        }
    }
}, 1000);