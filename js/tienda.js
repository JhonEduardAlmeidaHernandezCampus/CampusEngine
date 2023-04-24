export default {
    navCafeteria:{
        img: "../images/logoWhite.png",
        apartadosCafeteria:[
            {
                apartadoCaf:"Inicio",
                href:"../index.html"
            },
            {
                apartadoCaf:"Servicios",
                href:"../servicios/index.html"
            },
            {
                apartadoCaf:"Soporte",
                href:"../soporte/index.html"
            }
        ]
    },
    contenido:{
        title:"Cafeteria Virtual",
        seccion:"Sección compra",
        cards:[
            {
                img:"../images/papasmargarita.jpg",
                product:"Papas",
                precio:"2000",
                add:"AÑADIR AL CARRITO"
            },
            {
                img:"../images/Pastel-de-Pollo7.jpg",
                product:"Pasteles",
                precio:"2000",
                add:"AÑADIR AL CARRITO"
            },
            {
                img:"../images/Color-del-cafe-filtrado-y-su-parecido-con-el-color-de-un-vino-tinto.-scaled.jpg",
                product:"Cafe",
                precio:"2000",
                add:"AÑADIR AL CARRITO"
            }
        ]
    },

    showNavCafeteria(){
        let plantilla = `
                        <section class="container1">
                            <img id="logo" src="${this.navCafeteria.img}" alt="">
                            ${this.navCafeteria.apartadosCafeteria.map((val, id) => `<ul>
                                                                                        <li class="alink">
                                                                                            <a href="${val.href}" class="alink">${val.apartadoCaf}</a>
                                                                                        </li>
                                                                                    `).join("")} 
                                                                                     </ul> 
                        </section>
                        `;
            document.querySelector("#navegacionCafeteria").insertAdjacentHTML("beforeend", plantilla);
    },

    showCafeteria(){
        let plantilla = `
                        <h1>
                            ${this.contenido.title}
                        </h1>
                        <a href="" style="color: black";>
                            ${this.contenido.seccion}
                        </a>

                        <div class="products">
                        ${this.contenido.cards.map((val, id) => `
                                                                <div class="carts">
                                                                    <img src="${val.img}" alt="">
                                                                    <p>
                                                                        ${val.product} <br> 
                                                                        ${val.precio}$
                                                                    </p>
                                                                    <a>
                                                                    ${val.add}
                                                                    </a>
                                                                </div>
                                                                `).join("")}
                        `
            document.querySelector("#contentProductos").insertAdjacentHTML("beforeend", plantilla);
    }
}