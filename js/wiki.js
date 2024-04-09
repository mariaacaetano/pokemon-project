
document.addEventListener('DOMContentLoaded', () => {
  const botaoAlterarTema = document.getElementById("botao-alterar-tema");
  const body = document.querySelector("body");
  
  // Inicializa o tema baseado na preferência salva
  const temaSalvo = localStorage.getItem('tema') || 'modo-claro';
  body.classList.toggle("modo-escuro", temaSalvo === 'modo-escuro');
  atualizarImagemTema(temaSalvo === 'modo-escuro');

  botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.toggle("modo-escuro");
    localStorage.setItem('tema', modoEscuroEstaAtivo ? 'modo-escuro' : 'modo-claro');
    atualizarImagemTema(modoEscuroEstaAtivo);
  });

  function atualizarImagemTema(modoEscuroEstaAtivo) {
    // Ajuste o caminho das imagens conforme necessário. Use um caminho relativo apropriado.
    const caminhoImagem = modoEscuroEstaAtivo ? "../imagens/moon.png" : "../imagens/sun.png";
    const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
    imagemBotaoTrocaDeTema.setAttribute("src", ajustarCaminhoDaImagem(caminhoImagem));
  }

  function ajustarCaminhoDaImagem(caminho) {
    // Se estiver numa subpágina, ajuste o caminho como necessário. Exemplo:
    // return "../" + caminho; para subpáginas ou apenas return caminho; para a página principal.
    // Esta linha é um exemplo, ajuste conforme a estrutura do seu site.
    return caminho.startsWith('imagens') ?  "../"  + caminho : caminho;
  }
});

function abrirPagina(url){
  window.location.replace(url);
}