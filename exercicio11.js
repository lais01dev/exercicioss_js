function calc() {
    let m = parseFloat(document.getElementById('m').value);
    let a = parseFloat(document.getElementById('a').value);
    let result = document.getElementById('result');


    if (m > 50) {
        result.innerHTML = `A liga é predominantemente metálica`;
      } else if (a > 50){
        result.innerHTML = `A liga é predominantemente ametálica`;
      } else if (a === m){
        result.innerHTML = `As ambas são iguais`
      } else {
        result.innerHTML = "Para calcular, necessita-se que um deles seja maior ou igual que 50%";
      }

      
}
