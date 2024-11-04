function calc() {
    let nums = document.getElementById("nums").value.split(',').map(Number);
   
  
    document.getElementById("result").innerHTML = `Os valores digitados são: ${nums}`;
}


function calcmaior() {
    let nums = document.getElementById("nums").value.split(',').map(Number);
    
    let maior = parseInt(nums[0])

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maior) { maior = nums[i]; }

    }
    document.getElementById("resultmaior").innerHTML = `O valor maior é: ${maior}`;
}

function calcmenor() {
    let nums = document.getElementById("nums").value.split(',').map(Number);
    let menor = parseInt(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < menor) { menor = nums[i]; }

    }
    document.getElementById("resultmenor").innerHTML = `O valor menor é: ${menor} `;
}