function calc() {
    let km = parseFloat(document.getElementById('km').value);
    let valorcombu = parseFloat(document.getElementById('valorcombu').value);
    let result = document.getElementById('result');

    let km_percorrido = 8;

    let litros = km / km_percorrido;

    let total = litros * valorcombu;

    result.innerHTML = `O gasto do combustível é de R$ ${total.toFixed(2)}`;
}