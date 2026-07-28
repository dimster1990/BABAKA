function gallery()
{
    content.innerHTML = '<div id = "gallery">' +
                            
                            '<h1>Gallery</h1>' +
                            gallery_imager(1, 6) +
                            '<p>text about images</p>' +
                            '<h2>Gallery</h2>' +
                            gallery_imager(3, 12) +
                            '<p>text about images</p>' +
                        '</div>';
}

function gallery_imager(_img_start,_img_end)
{
    let _return_image = "";
    for (let i = _img_start; i <= _img_end; i++)
    {
        _return_image += '<div class = "gallery_image" onclick = "gallery_image_changer(' + i + ')" style = "background-image: url(images/gallery/image_' + i + '.png)"></div>';
    }
    return _return_image;
}

function gallery_image_changer(_number)
{
    imager.style.cssText = "background-image : url(images/gallery/image_" + _number + ".png)";
    view_on();
}