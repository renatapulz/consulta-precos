document.addEventListener('DOMContentLoaded', function() {
    let produto = document.getElementById('input-produto');
    let consultaPreco = document.getElementById('botao-consulta');
    let resultado = document.getElementById('reposta');
    let comprar = document.getElementById('botao-compra');
    let carrinho = [];
    let observacao = document.getElementById('campo-obs');
    let consulta = document.getElementById('consulta-total');

    consultaPreco.addEventListener('click', function() {
        let produtoDigitado = produto.value;
        if (produtoDigitado !== '') {
            let produtoDigitado = produto.value;
            let valor = consultaDePreco(produtoDigitado).toFixed(2);
            resultado.innerText = 'O valor do produto ' + produtoDigitado + ' é R$ ' + valor;
            observacao.innerText = ' ';
        }
        else {
            observacao.innerText = 'Insira o código ou nome do produto, por favor.';
            resultado.innerText = ' ';
        }
    });

    comprar.addEventListener('click', function() {
        let produtoDigitado = produto.value;
        let valorRecebido = resultado.innerText.split('R$ ')[1];
        if (produtoDigitado !== '' && valorRecebido !== undefined) {
            carrinho.push({ produto: produtoDigitado, valor: valorRecebido });
            observacao.innerText = 'Produto adicionado ao carrinho!';
            resultado.innerText = ' ';
            produto.value = ' ';
        }
        else {
            observacao.innerText = 'Insira o código ou nome do produto, em seguida, consulte o valor.';
        }
    });

    consulta.addEventListener('click', function() {
        let soma = 0;
        if (carrinho.length > 0) {
            carrinho.forEach(item => {
                soma += parseFloat(item.valor);
            });
            observacao.innerText = 'Total dos itens somam R$ ' + soma.toFixed(2);
            resultado.innerText = ' ';
        }
        else {
            observacao.innerText = 'Carrinho vazio';
            resultado.innerText = ' ';
        }  
    });

});

function consultaDePreco(produtoDigitado) {
    return Math.random() * 100;
}
