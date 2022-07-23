function menu_ham(hamburger, nav1){
    const d = document;

    d.addEventListener("click",(e) => {
        if(e.target.matches(hamburger) || e.target.matches(`${hamburger} *`)){
            d.querySelector(nav1).classList.toggle("active");
            d.querySelector(hamburger).classList.toggle("is-active");
        }
    });
}

menu_ham(".hamburger",".nav1");




function submenu_ham(submenuBtn, submenu1){
    const d = document;

    d.addEventListener("click",(e) => {
        if(e.target.matches(submenuBtn)){
            d.querySelector(submenu1).classList.toggle("desplegar");
        }
    });
}

submenu_ham(".submenu-btn",".btn");




function submenu_ham1(submenuBtn1, btn1){
    const d = document;

    d.addEventListener("click",(e) => {
        if(e.target.matches(submenuBtn1)){
            d.querySelector(btn1).classList.toggle("desplegar1");
        }
    });
}

submenu_ham1(".submenu-btn1",".btn1");


function submenu_ham2(submenuBtn2, btn2){
    const d = document;

    d.addEventListener("click",(e) => {
        if(e.target.matches(submenuBtn2)){
            d.querySelector(btn2).classList.toggle("desplegar2");
        }
    });
}

submenu_ham2(".submenu-btn2",".btn2");


