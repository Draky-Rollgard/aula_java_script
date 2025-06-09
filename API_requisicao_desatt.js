fetch('https://jsonplaceholder.typicode.com/users')
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error('Erro na requisição:', erro));

  /* 
fetch() envia uma requisição HTTP.
resposta.json() converte o corpo da resposta em JSON.
.then() lida com a resposta assíncrona.
.catch() trata erros como falhas de conexão.
*/