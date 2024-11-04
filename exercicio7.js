function calc() {
    let metal = parseFloat(document.getElementById('metal').value);
    let ametal = parseFloat(document.getElementById('ametal').value);
    let result = document.getElementById('result');

    let metal_porcentagem = metal * 2 / 100;
    let ametal_porcentagem = ametal * 2 / 100;

    if (metal_porcentagem > ametal_porcentagem) {
        result.innerHTML = `A liga é predominantemente metálica`;
      } else if (ametal_porcentagem > metal_porcentagem){
        result.innerHTML = `A liga é predominantemente ametálica`;
      } else{
        result.innerHTML = `Por favor, insira números válidos!`
      }

}
