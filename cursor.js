let _color = "background: #8383836c";


document.addEventListener('mouseover', (event) =>
    {
        const targetElement = event.target.closest('.target');
        if (!targetElement) return;
        _color = " background: #002fff4b;";
    });
document.addEventListener('mouseout', (event) =>
    {
        const targetElement = event.target.closest('.target');
        if (!targetElement) return;
        _color = " background: #8383836c;";
    });


/* menu_link_1.addEventListener("mouseover", function(){_color = " background: #002fff4b;";});
menu_link_1.addEventListener("mouseout",function(){_color = " background: #8383836c;";}); */

let _position_cursor = [];   

    document.addEventListener('mousemove', function (event) {
        _position_cursor[0] = event.clientX;
        _position_cursor[1] = event.clientY;
        setInterval(() => 
            {
                tester_position_cursor.innerHTML = '_position_cursor ~ ' + _position_cursor[0] + " : " + _position_cursor[1];
                tester_cursor.style.cssText = "left: " + _position_cursor[0] + "px; top: " + _position_cursor[1] + "px;" + _color;
            }, 10);
        });