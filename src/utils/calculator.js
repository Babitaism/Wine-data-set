class Calculator {
  constructor(data) {
    this.data = data;
  }
  sum = (array) => {
    let total = 0;
    array.forEach((num) => {
      total += parseFloat(num);
    });
    return total;
  };

  frequencyCounter = (arrayData) => {
    let counts = {};
    for (const num of arrayData) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts;
  };

  highestKeyInObj = (obj) => {
    let max = 0;
    let maxKey = "";
    for (let char in obj) {
      if (obj[char] > max) {
        max = obj[char];
        maxKey = char;
      }
    }
    return maxKey;
  };

  mode = (arrayData) => {
    let Withfrequencies = this.frequencyCounter(arrayData);
    let highestOccurenceKey = this.highestKeyInObj(Withfrequencies);
    return parseFloat(highestOccurenceKey).toFixed(3);
  };

  mean = (arrayData) => {
    let sumOfElement = this.sum(arrayData);
    let elementCount = arrayData.length;
    return parseFloat(sumOfElement / elementCount).toFixed(3);
  };

  median = (arrayData) => {
    const sortedData = arrayData.sort();
    const totalElements = sortedData.length;

    if (totalElements == 1) {
      return parseFloat(arrayData[0]).toFixed(3);
    }

    let calculatedmedian;
    if (totalElements % 2 == 0) {
      let firstMidTerm = totalElements / 2;
      let secondMidTerm = firstMidTerm + 1;
      calculatedmedian =
        (sortedData[firstMidTerm] + sortedData[secondMidTerm]) / 2;
    } else {
      let midTerm = (totalElements + 1) / 2;
      calculatedmedian = sortedData[midTerm];
    }
    return parseFloat(calculatedmedian).toFixed(3);
  };

  groupedBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
}

export default Calculator;
