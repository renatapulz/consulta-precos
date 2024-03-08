document.addEventListener('DOMContentLoaded', function() {
    let produto = document.getElementById('input-produto');
    let consultaPreco = document.getElementById('botao-consulta');
    let resultado = document.getElementById('reposta');
    let comprar = document.getElementById('botao-compra');
    let carrinho = [];

    consultaPreco.addEventListener('click', function() {
        let produtoDigitado = produto.value;
        let valor = consultaDePreco(produtoDigitado).toFixed(2);
        resultado.innerText = 'O valor do produto ' + produtoDigitado + ' é R$ ' + valor;
    });

    comprar.addEventListener('click', function() {
        let produtoDigitado = produto.value;
        let valor = consultaDePreco(produtoDigitado).toFixed(2);
        carrinho.push({ produto: produtoDigitado, valor: valor });
        console.log(carrinho);
    });

});

function consultaDePreco(produtoDigitado) {
    return Math.random() * 100;
}
