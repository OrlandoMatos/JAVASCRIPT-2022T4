let formulario = document.getElementById('mi-formulario');
let btn = "submit";



function pruebadiv (evento){
    evento.preventDefault();
    let resultado = document.getElementById('resultado');
    let PantallaTexto = document.getElementById('PantallaTexto');
    const ancho = formulario.elements.ancho.value;
    const altura = formulario.elements.altura.value;
    const color = formulario.elements.color.value;
    const text = document.getElementById('text');

    let pantalla = document.getElementById('pantalla');
    pantalla.style.width = ancho + "px"
    pantalla.style.height = altura + "px"
    pantalla.style.background = color

    PantallaTexto.innerText = text.value;
    
}

formulario.addEventListener(btn, pruebadiv);

