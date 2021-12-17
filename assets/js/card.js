const botaoSalvar = document.querySelector("#botao-salvar");

botaoSalvar.addEventListener("click", () => {
  // Carrega os dados do local storage ou se não tiver ainda ele cria um array
  const projetosSalvos = JSON.parse(localStorage.getItem("cards")) || [];

  codigo = document.querySelector("#area-codigo").innerText;
  titulo = document.querySelector("#menu-right-nome").value;
  descricao = document.querySelector("#menu-right-descricao").value;
  background = document.querySelector("#color-picked").value;

  const card = {
    codigo,
    titulo,
    descricao,
    background,
  };

  // Inclui o objeto card no array
  projetosSalvos.push(card);

  // Armazena no Local Storage.
  localStorage.setItem("cards", JSON.stringify(projetosSalvos));

  clearInput();
  alert('Projeto salvo, para vizualizar entre na comunidade.');
});


// Limpa as entradas de dados
function clearInput() {
  const inputCode = document.querySelector(".input-code");
  inputCode.innerHTML = " ";
  const inputNome = document.querySelector(".input-nome");
  inputNome.value = " ";
  const inputDescricao = document.querySelector(".input-descricao");
  inputDescricao.value = " ";
}
