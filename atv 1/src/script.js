function primoCheck(num) {
    let primo = true;
    for (let numero = 2; numero < num; numero++) {
        if (num % numero === 0) { 
          primo = false;
        }
    }
    return primo;
  
}
  function runJS() {
    const quant = parseInt(document.getElementById("num1").value, 10);
  
    if (quant <= 0) {
      document.querySelector("#output").innerHTML = "Resultado: Insira um número válido!";
      return;
    }
  
    const randomArray = Array.from({ length: quant }, () => Math.floor(Math.random() * 100) + 1);
    const primoCount = randomArray.filter(primoCheck).length;
  
    document.querySelector("#output").innerHTML = 
      `Resultado: Array gerado: [${randomArray.join(", ")}]. Quantidade de números primos: ${primoCount}`;
  }
  