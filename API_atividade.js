async function buscarUsuarios() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Converte a resposta em JSON
    const dados = await resposta.json();
    
    // Exibe os títulos dos 5 primeiros posts
    console.log("Títulos dos primeiros 5 posts:");
    dados.slice(0, 5).forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });

  } catch (erro) {
    console.error("Erro ao buscar posts:", erro);
  }
}

buscarUsuarios();
