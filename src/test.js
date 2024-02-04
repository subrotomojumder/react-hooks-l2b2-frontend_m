const wrapperFunction = (func) => {
  return (num) => {
    return func(num) * 2;
  };
};

const addOne = (num) => {
  return num + 1;
};

console.log(addOne(4));

const addOneAndDouble = wrapperFunction(addOne);
console.log(addOneAndDouble(2));