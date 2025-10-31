// Guardo en una variable la etiqueta SPAN donde se ingresará el dato guardado en el localStorage.
const datoRelevante = document.getElementById("data");

/* Este evento permite actulizar el texto de la etiqueta SPAN sin tener que actulizar la página.
Cada vez que se cambie el valor del localStorage, automáticamente se modifica el SPAN.*/
window.addEventListener('storage', (event) => {
    if (event.key === "valor") {
        datoRelevante.textContent = localStorage.getItem("valor");
    }
});