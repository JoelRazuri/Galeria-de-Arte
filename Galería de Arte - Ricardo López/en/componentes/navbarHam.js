function navbarH (){
    const navbarH = document.querySelector(".navbarH");
    return (
        navbarH.innerHTML = 
        `<ul class="nav1">
                <li class="item">
                    <a href="item_1.html"><span>Samples</span></a>
                    <ul class="submenu" id="hidden-g">
                        <li class="subitem"><a href="item_1.html">Know Us</a></li>
                        <li class="subitem"><a href="subitem_1_1.html">Previous samples</a></li>
                    </ul>
                </li>
                <li class="item1">
                <a href="item_2.html"><span class="submenu-btn1">Press</span></a>
                </li>
                <li class="item1">
                <a href="item_3.html"><span class="submenu-btn2">Auctions</span></a>
                </li>
                <li class="item1">
                <a href="item_4.html"><span>Contact Us</span></a>
                </li>
                <li class="item1">
                <a href="https://tienda.ricardolopezgaleria.com/en/"><span>Online Store</span></a>
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
   
       
       