function navbarH (){
    const navbarH = document.querySelector(".navbarH");
    return (
        navbarH.innerHTML = 
        `<ul class="nav1">
                <li class="item">
                    <a href="item_1.html"><span>Muestras</span></a>
                    <ul class="submenu" id="hidden-g">
                        <li class="subitem"><a href="item_1.html">Conocenos</a></li>
                        <li class="subitem"><a href="subitem1_1.html">Muestras Anteriores</a></li>
                    </ul>
                </li>
                <li class="item1">
                <a href="item_2.html"><span class="submenu-btn1">Prensa</span></a>
                </li>
                <li class="item1">
                <a href="item_3.html"><span class="submenu-btn2">Subastas</span></a>
                </li>
                <li class="item1">
                <a href="item_4.html"><span>Contactanos</span></a>
                </li>
                <li class="item1">
                <a href="https://tienda.ricardolopezgaleria.com/"><span>Tienda Online</span></a>
                </li>
            </ul>
            <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>`
    );
}

navbarH();
   
       