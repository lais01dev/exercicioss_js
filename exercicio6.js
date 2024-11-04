function calcFor_resultante() {
    let massa = parseFloat(document.getElementById('massa1').value);
    let aceleracao1 = parseFloat(document.getElementById('aceleracao1').value);
    let aceleracao2 = parseFloat(document.getElementById('aceleracao2').value);
    let result1 = document.getElementById('result1');

    if (isNaN(massa) || isNaN(aceleracao1) || isNaN(aceleracao2)) {
        result1.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    let a_resultante = aceleracao1 - aceleracao2;
    let for_resultante = massa * a_resultante;

    result1.innerHTML = `Força resultante: ${for_resultante.toFixed(2)} N`;
}


function calcForAcaoReacao() {
    let massa1 = parseFloat(document.getElementById('massa2').value);
    let aceleracao1 = parseFloat(document.getElementById('aceleracao3').value);
    let massa2 = parseFloat(document.getElementById('massa3').value);
    let aceleracao2 = parseFloat(document.getElementById('aceleracao4').value);
    let result2 = document.getElementById('result2');

    if (isNaN(massa1) || isNaN(aceleracao1) || isNaN(massa2) || isNaN(aceleracao2)) {
        result2.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    let forAcao = massa1 * aceleracao1;
    let forReacao = massa2 * aceleracao2;

    result2.innerHTML = `A Força de ação é de: ${forAcao.toFixed(2)} N e a Força de reação é de: ${forReacao.toFixed(2)} N (mesma magnitude, sentidos opostos)`;
}
