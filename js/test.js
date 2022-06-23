function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];

  numbers.forEach((element, index) => {
    if (element % 2 === 0) {
      newArray.push(element + value)
    }
    else {
      newArray.push(element)
    }
  });

  return newArray;
  // Change code above this line
}








