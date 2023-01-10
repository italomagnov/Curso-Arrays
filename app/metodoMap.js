function discountAmount(livros) {
    const discountAmount = 0.3;

    livrosComDesconto = livros.map((livro) => {
        return { ...livro, preco: livro.preco - livro.preco * discountAmount };
    });

    return livrosComDesconto;
}
