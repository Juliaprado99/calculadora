function inserir(num) {
  let input = document.getElementById("input");
  input.value += num;
}

function calcular() {
  let input = document.getElementById("input");
  if (document.getElementById("input").value == "") {
    alert("Digite um número");
  } else if (document.getElementById("input").value === undefined) {
    input.value = "";
    alert("Digite um número");
  } else {
    let numeros = input.value;
    let result = eval(numeros);
    input.value = result;
  }
}

function apagar() {
  let input = document.getElementById("input");
  input.value = input.value.substr(0, input.value.length - 1);
}
