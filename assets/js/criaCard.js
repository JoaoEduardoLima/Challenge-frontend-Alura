/*
Aqui será criado os cards para a visualização na pagina da comunidade, 
a função cria os elementos já com as classes e id e faz um append com os dados 
locallizados no local Storage. O for com a variavel 'i' foi necessário para 
poder acrescentar para cada id dos input uma referencia.
*/

function criaCard() {
  const cards = JSON.parse(localStorage.getItem("cards"));

  for (var i = 0; i < cards.length; i++) {
    code = cards[i].codigo;
    titulo = cards[i].titulo;
    descricao = cards[i].descricao;
    corBackground = cards[i].background;

    const projetoCards = document.querySelector("#cards-projeto");

    const projeto = document.createElement("div");
    projeto.classList.add("projeto__div");
    projetoCards.appendChild(projeto);

    const projetoEditor = document.createElement("div");
    projetoEditor.classList.add("projeto__editor-bg");
    projeto.appendChild(projetoEditor);

    projetoEditor.style.backgroundColor = corBackground;

    const circuloEditor1 = document.createElement("div");
    circuloEditor1.classList.add("circulo1", "circulo");
    projetoEditor.appendChild(circuloEditor1);

    const circuloEditor2 = document.createElement("div");
    circuloEditor2.classList.add("circulo2", "circulo");
    projetoEditor.appendChild(circuloEditor2);

    const circuloEditor3 = document.createElement("div");
    circuloEditor3.classList.add("circulo3", "circulo");
    projetoEditor.appendChild(circuloEditor3);

    const editor = document.createElement("div");
    editor.classList.add("code-editor_txt");
    editor.setAttribute("id", `area-codigo${i}`);
    projetoEditor.appendChild(editor);

    const areaDoCodigo = document.querySelector(`#area-codigo${i}`);
    areaDoCodigo.innerHTML = `<pre><code contenteditable="false" aria-label="Editor de código" class="area__codigo" id="code${i}"></code></pre>`;
    areaDoCodigo.querySelector(`#code${i}`).textContent = code;

    const tituloProjeto = document.createElement("h1");
    tituloProjeto.classList.add("projeto__titulo");
    tituloProjeto.setAttribute("id", `projeto-titulo${i}`);
    projeto.appendChild(tituloProjeto);

    const areaDoTitulo = document.querySelector(`#projeto-titulo${i}`);
    areaDoTitulo.innerHTML = titulo;

    const descricaoProjeto = document.createElement("p");
    descricaoProjeto.classList.add("projeto__descricao");
    descricaoProjeto.setAttribute("id", `projeto-descricao${i}`);
    projeto.appendChild(descricaoProjeto);

    const areaDaDescricao = document.querySelector(`#projeto-descricao${i}`);
    areaDaDescricao.innerHTML = descricao;
  }
}
