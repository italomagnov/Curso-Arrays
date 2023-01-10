let livros = [];
const endpointApi =
    'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getData();

async function getData() {
    const apiResponse = await fetch(endpointApi);
    livros = await apiResponse.json();
    livros = discountAmount(livros);
    showData(livrosComDesconto);
}
