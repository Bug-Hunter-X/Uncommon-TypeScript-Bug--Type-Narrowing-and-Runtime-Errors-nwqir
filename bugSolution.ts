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

function improvedProcessNumber(num: number | string): void {
  let numToPrint: number;
  if (typeof num === 'number') {
    numToPrint = num;
  } else if (typeof num === 'string') {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) {
      console.error('Invalid input: Not a number');
      return;
    } else {
      numToPrint = parsedNum;
    }
  } else {
    console.error('Invalid input type');
    return;
  }
  printNumber(numToPrint);
}

processNumber(10); // Output: 10
processNumber('10'); // Output: 10
processNumber('abc'); // Output: Invalid input: Not a number
improvedProcessNumber(10); // Output: 10
improvedProcessNumber('10'); // Output: 10
improvedProcessNumber('abc'); // Output: Invalid input: Not a number