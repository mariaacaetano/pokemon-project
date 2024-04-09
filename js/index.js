/*
	O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

	- objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
	- objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o body já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

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
    const caminhoImagem = modoEscuroEstaAtivo ? "imagens/moon.png" : "imagens/sun.png";
    const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
    imagemBotaoTrocaDeTema.setAttribute("src", ajustarCaminhoDaImagem(caminhoImagem));
  }

  function ajustarCaminhoDaImagem(caminho) {
    // Se estiver numa subpágina, ajuste o caminho como necessário. Exemplo:
    // return "../" + caminho; para subpáginas ou apenas return caminho; para a página principal.
    // Esta linha é um exemplo, ajuste conforme a estrutura do seu site.
    return caminho.startsWith('imagens') ?  caminho : caminho;
  }
});

function abrirPagina(url){
  window.location.replace(url);
}

