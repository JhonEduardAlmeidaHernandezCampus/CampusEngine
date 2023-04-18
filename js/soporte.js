export default{
    navSoporte:{
        img: "../images/logoWhite.png",
        apartadosSoporte:[
            {
                apartadoSop:"Inicio",
                href:"../index.html"
            },
            {
                apartadoSop:"Servicios",
                href:"../servicios/index.html"
            },
            {
                apartadoSop:"Soporte",
                href:"#"
            }
        ],
        preguntas:[
            {
                frecuentes:"¿Que servicios ofrece campus?"
            },
            {
                frecuentes:"¿Estos servicios y zonas manejan algun tipo de horario?, y si es asi ¿Cómo se distribuye?"
            },
            {
                frecuentes:"¿Puedo usar o solicitar estos servicios en cualquier momento?"
            }
        ]
    },

    showNavSoporte(){
        let plantilla = `
                        <section class="container1">
                            <img id="logo" src="${this.navSoporte.img}" alt="">
                            ${this.navSoporte.apartadosSoporte.map((val, id) => `<ul>
                                                                                        <li class="alink">
                                                                                            <a href="${val.href}" class="alink">${val.apartadoSop}</a>
                                                                                        </li>
                                                                                    `).join("")} 
                                                                                     </ul> 
                        </section>
                        `;
            document.querySelector("#navegacionSoporte").insertAdjacentHTML("beforeend", plantilla);
    },

    showPreguntasFrecuentes(){
        let plantilla = `
                        <h1>
                            Preguntas más frecuentes
                        </h1>

                        <div class="panel">
                                ${this.navSoporte.preguntas.map((val, id) => `
                                                                            <div class="accordion active">
                                                                                <p>
                                                                                    ${val.frecuentes}
                                                                                </p>
                                                                            </div>
                                                                            `).join("")}
                        </div>
                        `
            document.querySelector("#preguntasFrecuentes").insertAdjacentHTML("beforeend", plantilla)
    }
}