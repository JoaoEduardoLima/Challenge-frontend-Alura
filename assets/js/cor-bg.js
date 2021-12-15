var corEscolhida = document.querySelector("#color-picked");
var backgroundEditor = document.querySelector("#background-editor");

//Pega a cor padrão iniciada no HTML
var cor = corEscolhida.value;
backgroundEditor.style.backgroundColor = cor;

corEscolhida.addEventListener("input", () => {
    var cor = corEscolhida.value;
    backgroundEditor.style.backgroundColor = cor;
})