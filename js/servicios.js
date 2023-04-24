export default{
    navServicios:{
        img: "../images/logoWhite.png",
        apartadosServicios:[
            {
                apartadoSer:"Inicio",
                href:"../index.html"
            },
            {
                apartadoSer:"Servicios",
                href:"#"
            },
            {
                apartadoSer:"Soporte",
                href:"../soporte/index.html"
            }
        ]
    },
    contenido: {
        titulo:"Servicios",
        href:"../tiendaComida/index.html",
        cards:[
            {
                title:"Hunters",
                img:"../images/hunters.png"
            },
            {
                title:"Cafeteria hunters",
                img:"../images/Interior-cafeteria-pasteleria-Ofelia-Bakery_1731437050_168755568_1200x675.jpg"
            },
            {
                title:"8vo piso",
                img:"../images/cafeteria 8vo.jpg"
            },
            {
                title:"8vo piso",
                img:"../images/aseo.png"
            }
        ]
    },

    showNavServicios(){
        let plantilla = `
                        <section class="container1">
                            <img id="logo" src="${this.navServicios.img}" alt="">
                            ${this.navServicios.apartadosServicios.map((val, id) => `<ul>
                                                                                        <li class="alink">
                                                                                            <a href="${val.href}" class="alink">${val.apartadoSer}</a>
                                                                                        </li>
                                                                                    `).join("")} 
                                                                                     </ul> 
                        </section>
                        `;
            document.querySelector("#navegacionServicios").insertAdjacentHTML("beforeend", plantilla);
    },

    showServicios(){
        let plantilla = `
                        <h1>
                            ${this.contenido.titulo}
                        </h1>
                        <a href="${this.contenido.href}">
                            Cafeteria virtual
                        </a>

                        <div class="contenedorTarjetas">
                            ${this.contenido.cards.map((val, id) => `
                                                                    <div class="tarjetas">
                                                                        <p>
                                                                            ${val.title}
                                                                        </p>

                                                                        <img src="${val.img}" alt="">

                                                                        <button>
                                                                            Ver datos
                                                                        </button>

                                                                    </div>
                                                                    `).join("")}
                        `

        document.querySelector("#contenedor-tarjetas").insertAdjacentHTML("beforeend", plantilla);
    }
    
}