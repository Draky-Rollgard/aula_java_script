document.getElementById("form-nome").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o recarregamento da página

  const nome = document.getElementById("nome").value.trim();

  if (nome === "") {
    document.getElementById("mensagem").textContent = "Por favor, insira seu nome.";
    document.getElementById("mensagem").style.color = "red";
  } else {
    document.getElementById("mensagem").textContent = `Bem-vindo(a), ${nome}!`;
    document.getElementById("mensagem").style.color = "green";
  }
});
