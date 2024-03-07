document.addEventListener('DOMContentLoaded', function() {
    let produto = document.getElementById('input-produto');
    let consultaPreco = document.getElementById('botao-consulta');
    let resultado = document.getElementById('reposta');

    consultaPreco.addEventListener('click', function() {
        let produtoDigitado = produto.value;
        let valor = consultaDePreco(produtoDigitado);
        resultado.innerText = 'O valor do produto ' + produtoDigitado + ' é R$ ' + valor.toFixed(2);
    });
});

function consultaDePreco(produtoDigitado) {
    return Math.random() * 100;
}