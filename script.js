var teclado = document.querySelector(".teclado");

teclado.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})