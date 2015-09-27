function factorialize(num) {
  if (num <= 1) {
    return 1;
  }
else {
    // uses recursion to solve the problem
  return num * factorialize(num -1);
    }
}
factorialize(5, '');
