document.addEventListener('DOMContentLoaded', function () {
    let produto = document.getElementById('input-produto');
    let consultaPreco = document.getElementById('botao-consulta');
    let resultado = document.getElementById('reposta');
    let comprar = document.getElementById('botao-compra');
    let carrinho = [];
    let observacao = document.getElementById('campo-obs');
    let consulta = document.getElementById('consulta-total');
    let listaCompra = document.getElementById('lista-compras');
    let limparLista = document.getElementById('limpar');

    const carrinhoArmazenadoJSON = localStorage.getItem('carrinho');
    if (carrinhoArmazenadoJSON) {
        carrinho = JSON.parse(carrinhoArmazenadoJSON);
        alert('Você tem produtos salvos!');
    }

    consultaPreco.addEventListener('click', function () {
        let produtoDigitado = produto.value;
        if (produtoDigitado !== '') {
            let produtoDigitado = produto.value;
            let valor = consultaDePreco(produtoDigitado).toFixed(2);
            resultado.innerText = 'O valor do produto ' + produtoDigitado + ' é R$ ' + valor;
            observacao.innerText = ' ';
            listaCompra.innerText = ' ';
        }
        else {
            observacao.innerText = 'Insira o código ou nome do produto, por favor.';
            resultado.innerText = ' ';
            listaCompra.innerText = ' ';
        }
    });

    comprar.addEventListener('click', function () {
        let produtoDigitado = produto.value;
        let valorRecebido = resultado.innerText.split('R$ ')[1];
        if (produtoDigitado !== '' && valorRecebido !== undefined) {
            carrinho.push({ produto: produtoDigitado, valor: valorRecebido });
            observacao.innerText = 'Produto adicionado ao carrinho!';
            resultado.innerText = ' ';
            produto.value = ' ';
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
        }
        else {
            observacao.innerText = 'Insira o código ou nome do produto, em seguida, consulte o valor.';
        }
    });

    consulta.addEventListener('click', function () {
        let soma = 0;
        if (carrinho.length > 0) {
            carrinho.forEach(item => {
                soma += parseFloat(item.valor);
            });
            observacao.innerText = 'Total da compra: R$ ' + soma.toFixed(2);
            resultado.innerText = ' ';
            carrinho.forEach((item, index) => {
                index += 1;
                listaCompra.innerText += '[' + index + '] ' + item.produto + ' ---> ' + item.valor + '\n';
            });
        }
        else {
            observacao.innerText = 'Carrinho vazio!';
        }
    });

    limparLista.addEventListener('click', function () {
        if (carrinho.length > 0) {
            carrinho = [];
            observacao.innerText = 'Lista excluída!';
            listaCompra.innerText = ' ';
            resultado.innerText = ' ';
            localStorage.clear();
        }
        else {
            observacao.innerText = 'Carrinho vazio!';
            localStorage.clear();
        }
    });

});

function consultaDePreco() {
    return Math.random() * 100;
}
