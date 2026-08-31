

function characters()
{
    content.innerHTML = "<div class = 'characters_content'>" +
                            "<div class = 'characters_scroll'>" +
                                "<div id = 'characters'>" +
                                    "<div class = 'character'></div>"+
                                    "<div class = 'character'></div>"+
                                    "<div class = 'character'></div>"+
                                    "<div class = 'character'></div>"+
                                    "<div class = 'character'></div>"+
                                    "<div class = 'character'></div>"+
                                    "<div class = 'character'></div>"+
                                    "<div class = 'character'></div>"+
                                    "<div class = 'character'></div>"+
                                "</div>"+
                            "</div>" +
                            "<div id = 'characters_image'></div>" +
                            "<div id = 'characters_text'></div>" +
                        "</div>";
}

function characters_list()
{
    for (let i = 0; i < _book_page_name.length; i++)
    {
        book_content_links.innerHTML += '<div class = "menu_link_page" id = "page_list_' + i + '"' + ' onclick = "book_menu(' + i + ')">' + _book_page_name[i] + '</div>'
    }
}