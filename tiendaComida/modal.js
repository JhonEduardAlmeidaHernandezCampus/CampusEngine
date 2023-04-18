let abrir = document.querySelector("#abrir");
let cerrar = document.querySelector("#cerrar");
let mostrar = document.querySelector("#miVentanaModal");

abrir.addEventListener("click", (e) => {
    mostrar.style.display = "block";
})

cerrar.addEventListener("click", (e) => {
    mostrar.style.display = "none";
})