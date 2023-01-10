const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => btn.addEventListener('click', handleFilter));

function handleFilter() {
    const btnElement = document.getElementById(this.id);
    const categoria = btnElement.value;

    let livrosFiltrados =
        categoria === 'disponivel'
            ? filtrarPorDisponibilidade()
            : filtrarPorCategoria(categoria);

    showData(livrosFiltrados);
    if (categoria === 'disponivel') {
        const valorTotal = totalBooksPrice(livrosFiltrados);
        showPriceAllBooks(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter((livro) => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter((livro) => livro.quantidade > 0);
}

function showPriceAllBooks(valorTotal) {
    livrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>
        Todos os livros disponíveis por R$<span id="valor">${valorTotal}</span>
    </p>
</div>`;
}
