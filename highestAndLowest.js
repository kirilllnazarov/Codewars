function highAndLow(numbers) {
    let arrNumbers = numbers.split(' ');
    let sortNumbers = arrNumbers.sort((a, b) => b - a);
    return `${sortNumbers[0]} ${sortNumbers[sortNumbers.length -1]}`;
    }