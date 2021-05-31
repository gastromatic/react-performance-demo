export const fib = (n: number): number => {
  if (n < 2) {
    return n; // or 1
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};
