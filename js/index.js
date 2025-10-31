// Guardo en una varibale el botón "Guardar" y el cuadro de texto INPUT.
let botonGuardar = document.getElementById("buttonText");
let textoUsuario = document.getElementById("inputText");


// Esta función guarda en el localStorage el valor ingresado en el cuadro de texto del INPUT.
function imprimirEnPantalla(){
    localStorage.setItem("valor", textoUsuario.value);
    textoUsuario.value = "";
}

// Evento que se activa al hacer click en el botón "Guardar". Activa la función imprimirEnPantalla().
botonGuardar.addEventListener("click",imprimirEnPantalla);

/* Lo anterior es lo mismo que:

botonGuardar.addEventListener("click", function (){
    console.log(textoUsuario.value);
    console.log("----");
    textoUsuario.value = "";


});

En el primer caso el código queda más limpio, ya que separa la función y el evento. Y en el segundo queda más compacto.
*/

/* Por comodidad se le agregó un segundo evento al cuadro de texto INPUT.
Dicho evento hace lo mismo que al hacer click en el botón "Guardar", pero se activa al apretar la tecla Enter.
Para ello se utiliza el evento "keypress" y se verifica en la función si la tecla apretada fue efectivamente el Enter.*/
textoUsuario.addEventListener("keypress", function (evento) {
    if (evento.key === "Enter"){
        imprimirEnPantalla();
    }
})




