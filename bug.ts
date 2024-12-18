function printNumber(num: number): void {
  console.log(num);
}

function processNumber(num: number | string): void {
  if (typeof num === 'string') {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) {
      console.error('Invalid input: Not a number');
      return;
    }
    printNumber(parsedNum);
  } else {
    printNumber(num);
  }
}

processNumber(10); // Output: 10
processNumber('10'); // Output: 10
processNumber('abc'); // Output: Invalid input: Not a number