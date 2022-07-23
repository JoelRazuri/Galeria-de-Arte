function footer (){
    const footer = document.getElementById("footer");
    return (
        footer.innerHTML = 
        `<section id="item-2">
        <section class="section">
            <h3 class="h3"><a href="item_1.html" class="link">Muestras</a></h3>
            <div class="content-p-2">
                <p class="text-2"><a class="info-2" href="item_1.html">Conocenos</a></p>
                <p class="text-2"><a class="info-2" href="subitem1_1.html">Muestras anteriores</a></p>
            </div>
        </section>
        <section  class="section">
            <h3 class="h3"><a href="item_2.html" class="link">Prensa</a></h3>
        </section>
        <section  class="section">
            <h3 class="h3"><a href="item_3.html" class="link">Subastas</a></h3>
        </section>
        <section  class="section">
           <h3 class="h3"><a href="item_4.html" class="link">Contactanos</a></h3>
           <div id="section-c">
           <p class="text-2"><a class="info-2" target="_blank" href="https://api.whatsapp.com/send/?phone=5491155249054&text=Quiero+recibir+mas+informaci%C3%B3n&app_absent=0"><i class="fa-solid fa-square-phone"></i> </a></p>
           <p class="text-2"><a class="info-2" target="_blank" href="mailto:ricardolopezaleria@yahoo.com"><i class="fa-solid fa-envelopes-bulk"></i> </a></p>
           <p class="text-2"><a class="info-2" target="_blank" href="https://www.instagram.com/ricardolopez_galeria/"><i class="fa-brands fa-instagram"></i> </a></p>
           <p class="text-2"><a class="info-2" target="_blank" href="https://www.facebook.com/GaleriaRicardoLopez"><i class="fa-brands fa-facebook-square"></i> </a></p>
           </div>
        </section>
        <section  class="section">
     </section>
    </section>
    <div id="content-p-3">
        <p class="copyright"><i class="fa-solid fa-copyright"></i> 2022 Ricardo López Galería de Arte.Todos los derechos reservados.</p>
    </div>`
    );
}

footer();
   
       