function obtenerPrimos(max) {
  var sieve = [], i, j, primos = [];
  for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
              sieve[j] = true;
          }
      }
  }
  return primos;
}

console.log(obtenerPrimos(10));