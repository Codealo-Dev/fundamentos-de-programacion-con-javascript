// Crea aquí tu código

function reverse(valor) {
  let resultado = "";
  for (let i = valor.length - 1; i >= 0; i--) {
    resultado += valor[i];
  }
  return resultado;
}

console.log(reverse("codealo"));
console.log(reverse("javascript"));
console.log(reverse("la programacion es lo mejor"));
console.log(reverse("12346789"));