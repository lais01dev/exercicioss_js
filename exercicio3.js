function calc() {
    let numeros = document.getElementById("numeros").value.split(",").map(Number);
    if (numeros.length !== 10) {
        result.innerHTML = `Por favor, Digite exatamente dez números.`;
        return;
    } 
    let soma = 0, menorqZero = 0;
    let maiorqMedia = [];

    for (let num of numeros) {
        soma += num;
        if (num < 0) {
            menorqZero++;
        }
    }

    let media = soma/numeros.length;

    for (let num of numeros){
        if (num > media) {
            maiorqMedia.push(num)
        }
    }
    document.getElementById("result").innerHTML=`
    A média é: ${media.toFixed(2)}<br>
    Os números maiores que a média são: ${maiorqMedia.join(', ')}<br>
    Os números de elementos menores que zero são : ${menorqZero}`;
    }
