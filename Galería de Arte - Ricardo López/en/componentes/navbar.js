function navbar (){
    const navbar = document.getElementById("navbar");
    return (
        navbar.innerHTML = 
        `<ul class="nav">
                <li class="item"><a href="item_1.html"><span>Samples</span></a>
                    <ul class="submenu" id="hidden-g">
                        <li class="subitem"><a href="item_1.html">Know us</a></li>
                        <li class="subitem"><a href="subitem1_1.html">Previous samples</a></li>
                    </ul>
                </li>
                <li class="item"><a href="item_2.html"><span>Press</span></a>
                </li>
                <li class="item"><a href="item_3.html"><span>Auctions</span></a>
                </li>
                <li class="item"><a href="item_4.html"><span>Contact us</span></a>
                </li>
                <li class="item"><a href="https://tienda.ricardolopezgaleria.com/en/" target = "_blank"><span>Online Store</span></a>
                </li>
            </ul>`
    );
}

navbar();
   
       