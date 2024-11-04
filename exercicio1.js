function calcular() {
    let numeros = document.getElementById("numeros").value.split(',').map(Number);
    let soma = 0, pares = 0, impares = 0;

    for (let num of numeros) {
        soma += num;
        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    let media = soma / numeros.length;

    document.getElementById("result").innerHTML = `
                Soma: ${soma}<br><br>
                Média: ${media.toFixed(2)}<br><br>
                Pares: ${pares}<br><br>
                Ímpares: ${impares}
            `;
}