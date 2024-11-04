function calc() {
    let comprimento = parseFloat(document.getElementById('comprimento').value);
    let largura = parseFloat(document.getElementById('larg').value)
    let result = document.getElementById('result');

    let preco_piso_por_M2 = 36;
    let area = comprimento * largura;
    let custo_total = area * preco_piso_por_M2;

    result.innerHTML = `O custo total para assentar o piso é de: R$ ${custo_total.toFixed(2)}`;
}