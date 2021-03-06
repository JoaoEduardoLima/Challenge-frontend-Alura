const linguagem = document.querySelector("#linguagem-projeto");
const areaDoCodigo = document.querySelector("#area-codigo");
const botao = document.querySelector("#botao-highlight");

// Inicia um contador para aplicar e remover o highlight
var flag = 2;

botao.addEventListener("click", () => {
  // Quando o contador for par aplica, quando for ímpar remove
  if (flag % 2 == 0) {
    aplicaHighlight();
  } else {
    removeHighlight();
  }
  flag++;
});

function aplicaHighlight() {
  const codigo = areaDoCodigo.innerText;
  areaDoCodigo.innerHTML = `<code contenteditable="true" aria-label="Editor de código" class="area__codigo language-${linguagem.value}"></code>`;
  areaDoCodigo.querySelector("code").textContent = codigo;
  hljs.highlightElement(areaDoCodigo.querySelector("code"));
}

function removeHighlight() {
  const codigo = areaDoCodigo.innerText;
  areaDoCodigo.innerHTML = `<code contenteditable="true" aria-label="Editor de código" class="area__codigo"></code>`;
  areaDoCodigo.querySelector("code").textContent = codigo;
}
