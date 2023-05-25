//botones
var btnBorrar = document.getElementById('borrar');
var btnResumen = document.getElementById('resumen');
var texto = document.getElementById('total');
var porcentaje = document.getElementById('descuentos');  
var cantidad = document.getElementById('cantidad');
var buttonCarrousell = document.getElementById('buttonCARR');


const borrar = () => location.reload();

function resumen(){
    let porciento = porcentaje.value;
    let cant = cantidad.value;
    var resultado;
    let ticket = 200;
    if(porciento == 80){
        ticket = 40
        resultado = ticket * cant;

    }if (porciento == 50) {
        ticket = 100;
        resultado = ticket * cant;

    }if (porciento == 15) {
        ticket = 170;
        resultado = ticket * cant;
    }if(porciento == 0){
        resultado = " Ingresa una cantidad y categoría ";
    }
    
    texto.innerHTML = "Total a pagar: $ "+ resultado;
}

buttonCarrousell.addEventListener("click",function(){
    window.location.href = "/indexDos.html"
})