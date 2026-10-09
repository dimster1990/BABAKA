let _book_page_ = [];
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
    ["image_0","image_1","image_2"],
    ["йцук","фыва","ячсм"],
    ["q"]
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

    //imager.style.cssText = book_side_image_inside.style.cssText = book_side_image.style.cssText = "background-image : url(images/image_" + _page + ".png)";
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



let _book = '<div class = "book_reader">' +
                '<div id = "book_side_image" onclick = "view_on()">' +
                    '<div id = "book_side_image_inside"></div>' +
                '</div>' +
                '<div id = "book_pages"></div>' +
                '<div id = "book_side_titles">' +
                    '<div id = "book_contents">' +
                        '<div class = "contents_text">Contents:</div>' +
                        '<div id = "book_content_links"></div>' +
                    '</div>' +
                '</div>' +
            '</div>';


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

        if(_screen_height != book_pages.offsetHeight)
        {
            tester_screen_height.innerHTML = "_screen_height ~ " + book_pages.offsetHeight;
            _screen_height = book_pages.offsetHeight;
        }

        for (let _c = 0; _c < _book_side_image_id.length; _c++)
        {
            
            if(Math.round(document.getElementById(_book_side_image_id[_c]).getBoundingClientRect().top) < book_pages.offsetHeight + Math.round(book_pages.getBoundingClientRect().top) && Math.round(document.getElementById(_book_side_image_id[_c]).getBoundingClientRect().top) > book_pages.getBoundingClientRect().top)
            {
                if(_book_side_image_id_changer != _book_side_image_id[_c])
                {
                    console.log(_book_side_image_id[_c]);/////////////////////////////////
                    imager.style.cssText = book_side_image_inside.style.cssText = book_side_image.style.cssText = "background-image : url(images/" + _book_side_image_id[_c] + ".png)";
                }
                _book_side_image_id_changer = _book_side_image_id[_c];
            }
        }
    }
}, 1000);







//-----------------------------------------------------page_001-----------------------------------------------------

_book_page_[0] = 
    '<h1>PROLOGUE</h1><h2>The death</h2>' +
    '<br /><b id = "image_0">---------image_0------</b><br /><br />' +
    '<p>Early morning. Three people were standing in front of the club. Two of them were elves. One was <b>Orkan Scharfsinning</b>, a fair-skinned blond with sharp green eyes and long pointed ears. A tight black bodysuit hugged his narrow frame, while loose cargo pants with far too many pockets hung from his hips. The other elf, <b>Wolfram</b>, had a warmer skin tone, silver hair and glasses. The third member of the group was a tall, muscular girl with greenish skin, short brown hair and visible tusks. At first glance, there was no mistaking her for anything but an orc. Her name was <b>Brief Scuffs</b>.</p><p>They had just arrived. Brief was looking up, scanning the airspace for guard drones.&#8203;<br />&#8212; <b>All seems to be clear.</b> &#8212; She gave the sky one more glance before turning her head to the boys. &#8212; <b>Orkan?&#8203;<br />' +
    '</b>&#8212;<b>Yeah.</b> &#8212; Orkan was fiddling with his cyberdeck, his tone full of annoyance. He was busy checking the building plan for the tenth time and didn&#8217;t want anyone to bother him.&#8203;<br />&#8212; <b>I&#8217;m sure you&#8217;ve memorized it enough.</b> &#8212; Brief gave him a small smile, yet she seemed a little frustrated. &#8212; <b>Now, can you give the deck to Wolfram? We still need to hack the cameras.&#8203;<br /></b>&#8212; <b>Right.</b> &#8212; Orkan rolled his eyes with an annoyed sigh, after which he finally handed the cyberdeck to Wolfram. &#8212; <b>There.&#8203;<br /></b>Wolfram took the device without much gratitude on his face.&#8203;<br />&#8212; <b>Thank you.</b> &#8212; He quickly started typing something, and after a mere minute he gave the deck to Brief.&#8203;<br />&#8212; <b>Gorgeous work, buddy.</b> &#8212; At these words from Brief, Wolfram blushed slightly, but she didn&#8217;t notice. &#8212; <b>Alri-i-ight, everything seems to be okay now. Let&#8217;s repeat our plan just one more time before moving out, shall we?&#8203;<br /></b>Orkan let out an unhappy sigh. He didn&#8217;t need to repeat the plan for the hundredth time in a row. All he wanted right now was to finish the gig as soon as possible and get paid. He was short on money and the rent deadline was getting closer&#8230;&#8203;<br />&#8212; <b>Don&#8217;t make that face, it doesn&#8217;t make you look smarter, you know.</b> &#8212; Wolfram glanced at Orkan before turning his attention back to Brief.' +
    '<br /><b id = "image_1">---------image_1------</b><br /><br />' +
    '</b>&#8212;<b>Yeah.</b> &#8212; Orkan was fiddling with his cyberdeck, his tone full of annoyance. He was busy checking the building plan for the tenth time and didn&#8217;t want anyone to bother him.&#8203;<br />&#8212; <b>I&#8217;m sure you&#8217;ve memorized it enough.</b> &#8212; Brief gave him a small smile, yet she seemed a little frustrated. &#8212; <b>Now, can you give the deck to Wolfram? We still need to hack the cameras.&#8203;<br /></b>&#8212; <b>Right.</b> &#8212; Orkan rolled his eyes with an annoyed sigh, after which he finally handed the cyberdeck to Wolfram. &#8212; <b>There.&#8203;<br /></b>Wolfram took the device without much gratitude on his face.&#8203;<br />&#8212; <b>Thank you.</b> &#8212; He quickly started typing something, and after a mere minute he gave the deck to Brief.&#8203;<br />&#8212; <b>Gorgeous work, buddy.</b> &#8212; At these words from Brief, Wolfram blushed slightly, but she didn&#8217;t notice. &#8212; <b>Alri-i-ight, everything seems to be okay now. Let&#8217;s repeat our plan just one more time before moving out, shall we?&#8203;<br /></b>Orkan let out an unhappy sigh. He didn&#8217;t need to repeat the plan for the hundredth time in a row. All he wanted right now was to finish the gig as soon as possible and get paid. He was short on money and the rent deadline was getting closer&#8230;&#8203;<br />&#8212; <b>Don&#8217;t make that face, it doesn&#8217;t make you look smarter, you know.</b> &#8212; Wolfram glanced at Orkan before turning his attention back to Brief.' +
    '<br /><b id = "image_2">---------image_2------</b><br /><br />' +
    '</b>&#8212;<b>Yeah.</b> &#8212; Orkan was fiddling with his cyberdeck, his tone full of annoyance. He was busy checking the building plan for the tenth time and didn&#8217;t want anyone to bother him.&#8203;<br />&#8212; <b>I&#8217;m sure you&#8217;ve memorized it enough.</b> &#8212; Brief gave him a small smile, yet she seemed a little frustrated. &#8212; <b>Now, can you give the deck to Wolfram? We still need to hack the cameras.&#8203;<br /></b>&#8212; <b>Right.</b> &#8212; Orkan rolled his eyes with an annoyed sigh, after which he finally handed the cyberdeck to Wolfram. &#8212; <b>There.&#8203;<br /></b>Wolfram took the device without much gratitude on his face.&#8203;<br />&#8212; <b>Thank you.</b> &#8212; He quickly started typing something, and after a mere minute he gave the deck to Brief.&#8203;<br />&#8212; <b>Gorgeous work, buddy.</b> &#8212; At these words from Brief, Wolfram blushed slightly, but she didn&#8217;t notice. &#8212; <b>Alri-i-ight, everything seems to be okay now. Let&#8217;s repeat our plan just one more time before moving out, shall we?&#8203;<br /></b>Orkan let out an unhappy sigh. He didn&#8217;t need to repeat the plan for the hundredth time in a row. All he wanted right now was to finish the gig as soon as possible and get paid. He was short on money and the rent deadline was getting closer&#8230;&#8203;<br />&#8212; <b>Don&#8217;t make that face, it doesn&#8217;t make you look smarter, you know.</b> &#8212; Wolfram glanced at Orkan before turning his attention back to Brief.</p>'
    
//-----------------------------------------------------page_002-----------------------------------------------------   

_book_page_[1] = 
    '<h1>Название книги 2</h1>' + 
    '<h2>Название главы 2</h2>' + 
    '<p>Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст.</p>' +
    '<p>Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. </p>' +
    '<h2>Название главы</h2>' + 
    '<p>Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. </p>' + 
    '<p>Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. </p>';

    //-----------------------------------------------------page_003-----------------------------------------------------

_book_page_[2] = '121212';
    

_book_page_[3] = 
    '<h1>Название книги 231</h1>' + 
    '<h2>Название главы 231</h2>' + 
    '<p>Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст.</p>' +
    '<p>Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. </p>' +
    '<h2>Название главы</h2>' + 
    '<p>Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. </p>' + 
    '<p>Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. Текст-текст разный текст, еще текст, слова, всякое разное и текст. </p>';