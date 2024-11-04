function calcIonica() {
    let eletronsM = parseInt(document.getElementById('eletronsM').value);
    let eletronsA = parseInt(document.getElementById('eletronsA').value);
    let resultIonica = document.getElementById('resultIonica');

    let formulaIonica = `Fórmula iônica: M${eletronsA}A${eletronsM} (${eletronsA}:${eletronsM})`;
    resultIonica.textContent = formulaIonica;
}

function calcCovalente() {
    let ligacoesA1 = parseInt(document.getElementById('ligacoesA1').value);
    let ligacoesA2 = parseInt(document.getElementById('ligacoesA2').value);
    let resultCovalente = document.getElementById('resultCovalente');


    let formulaCovalente = `Fórmula molecular: A${ligacoesA2}B${ligacoesA1} (${ligacoesA2}:${ligacoesA1})`;
    resultCovalente.textContent = formulaCovalente;
}
