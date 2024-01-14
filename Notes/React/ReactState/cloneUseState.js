const useStateClone = (initialValue) => {
  let stateValue = initialValue;
  const stateUpdaterFunction = (value) => {
    stateValue = value;
  };

  const giveState = () => {
    return [stateValue, stateUpdaterFunction];
  };

  return giveState();
};

const App = () => {
  const [value, setValue] = useStateClone(1);
  console.log(value,setValue);
  setValue(100);
  console.log(value);
};


App();