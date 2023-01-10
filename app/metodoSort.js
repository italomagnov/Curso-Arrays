let btnOrdenar = document.getElementById('btnOrdenarPorPreco');

btnOrdenar.addEventListener('click', handleSort);

function handleSort() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    showData(livrosOrdenados);
}
