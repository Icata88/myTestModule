const myModule = (() => {
  const sum = (a, b) => {
    return a + b;
  };

  const extract = (a, b) => {
    return a - b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  const divide = (a, b) => {
    return a / b;
  };

  return {
    sum: sum,
    extract: extract,
    multiply: multiply,
    divide: divide
  };
})();

module.exports = myModule;
