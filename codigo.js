function ponerBorde() {

    let imagen = document.querySelector("#idImagen");

    if (imagen.style.border == "") 
    {imagen.style.border = "2px solid";
     imagen.style.borderColor = "red";
     imagen.style.borderRadius = "20px";}

    else {imagen.style.border = ""}

}


function pointer() {

    let imagen = document.querySelector("#idImagen");
    imagen.style.cursor = "pointer";
}

function contadorStickers() {

    let cantidad1 = document.querySelector("#inputSticker1").value;
    let cantidad2 = document.querySelector("#inputSticker2").value;
    let cantidad3 = document.querySelector("#inputSticker3").value;
    let salidaDatos = document.querySelector("#salidaDatos");

    let cantidadSticker1 = parseInt(cantidad1);
    let cantidadSticker2 = parseInt(cantidad2);
    let cantidadSticker3 = parseInt(cantidad3);

    let cantidadTotalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

    if (cantidadTotalStickers <= 10 && cantidadTotalStickers > 0) {
        salidaDatos.innerHTML = `Felicidades, Llevas ${cantidadTotalStickers} Stickers`
        salidaDatos.style.color = "green"
        salidaDatos.style.fontSize = "1.2rem"
    }
    else {
        salidaDatos.innerHTML = `No es posible comprar ${cantidadTotalStickers} Stickers, elige una cantidad correcta`
        salidaDatos.style.color = "red"
        salidaDatos.style.fontSize = "1.2rem"


    }

}

function passwordCheck() {

    let select1 = document.querySelector("#select1").value;
    let select2 = document.querySelector("#select2").value;
    let select3 = document.querySelector("#select3").value;
    let parrafo = document.querySelector("#resultado");

    let resultadoClave =  select1 + select2 + select3;

    if (resultadoClave === "911") {
        parrafo.innerHTML = "Password 1 Correcto";
        parrafo.style.color = "green"
    }
    else if (resultadoClave === "714") {
        parrafo.innerHTML = "Password 2 Correcto"
        parrafo.style.color = "green"

    }
    else {parrafo.innerHTML = "Password Incorrecto"
          parrafo.style.color = "red"
};


}