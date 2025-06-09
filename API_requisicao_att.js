async function buscarUsuarios() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar usuários:", erro);
  }
}

buscarUsuarios();
