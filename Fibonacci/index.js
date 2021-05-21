
function fibonacci(n) {
  var fibo = [0, 1];
  if (n <= 2) return 1;

  for (var i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
  }

  return fibo[n];
}

fibonacci(12); // 144


function fibonacci2(n) {
  if(n <= 1)
    return n;
  else 
    return fibonacci2(n-1) + fibonacci2(n-2);
}

fibonacci2(12); // 144