function highAndLow(numbers) {
    numbers = numbers.split(' ');
    //console.log(numbers);
    //console.log(...numbers);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${max} ${min}`;
  }


console.log(highAndLow("13 9 -2312312321 35 4 -5 12 12321"));