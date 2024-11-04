function calc() {
    let x = parseFloat(document.getElementById('x').value);
    let result = document.getElementById('result');

    let FunEX = Math.exp(x); 
    result.innerHTML = `O valor de f(${x}) = e^${x} é: ${FunEX.toFixed(4)}`;
}