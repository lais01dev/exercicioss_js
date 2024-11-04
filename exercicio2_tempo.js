function calcTemp() {
    let temperatura=document.getElementById('temperatura').value;
    let valor = parseFloat(document.getElementById('valor').value);
    let result=document.getElementById('result');
    if(temperatura==='celsius'){
        let fahrenheit=(valor*9/5)+32;
        result.innerHTML=`${valor}°C é igual a ${fahrenheit.toFixed(2)}°F `
    } else if(temperatura==='fahrenheit'){
        let celsius=(valor-32)* 5/9;
        result.innerHTML=`${valor}°F é igual a ${celsius.toFixed(2)}°C`;
    }else{
        result.innerHTML="Por favor, selecione uma escala!"
    }
}