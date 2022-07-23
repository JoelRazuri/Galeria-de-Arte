function navbar (){
    const navbar = document.getElementById("navbar");
    return (
        navbar.innerHTML = 
        `<ul class="nav">
                <li class="item">
                    <a href="item_1.html"><span>Muestras</span></a>
                    <ul class="submenu" id="hidden-g">
                        <li class="subitem"><a href="item_1.html">Conocenos</a></li>
                        <li class="subitem"><a href="subitem_1_1.html">Muestras Anteriores</a></li>
                    </ul>
                </li>
                <li class="item">
                <a href="item_2.html"><span>Prensa</span></a>
                </li>
                <li class="item">
                <a href="item_3.html"><span>Subastas</span></a>
                </li>
                <li class="item">
                <a href="item_4.html"><span>Contactanos</span></a>
                </li>
                <li class="item">
                <a href="https://tienda.ricardolopezgaleria.com/" target = "_blank"><span>Tienda Online</span></a>
                </li>
            </ul>`
    );
}

navbar();
   
       