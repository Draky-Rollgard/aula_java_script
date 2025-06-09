function alterarConteudo() {
  // Altera o texto do título
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Título Alterado com Sucesso!";

  // Altera o atributo src da imagem
  const imagem = document.getElementById("imagem");
  imagem.setAttribute("src", "https://via.placeholder.com/300");
  imagem.setAttribute("alt", "Nova imagem");

  // Pode também alterar diretamente via propriedade
  imagem.alt = "Descrição alternativa atualizada";
}
