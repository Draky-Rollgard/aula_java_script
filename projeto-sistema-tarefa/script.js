document.getElementById("form-tarefa").addEventListener("submit", function(event) {
  event.preventDefault();

  const input = document.getElementById("input-tarefa");
  const texto = input.value.trim();

  if (texto === "") return;

  adicionarTarefa(texto);
  input.value = "";
});

function adicionarTarefa(texto) {
  const lista = document.getElementById("lista-tarefas");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(botaoRemover);

  lista.appendChild(li);
}
