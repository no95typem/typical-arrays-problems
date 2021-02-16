
exports.min = function min(...args) {
  let min;
  for (let arg of args) {
    if (typeof arg == "number") {
      if (typeof min == "undefined") min = arg;
      else if (min > arg) min = arg;
    }
  }
  if (typeof min == "undefined") min = 0;
  return min;
}

exports.max = function max(...args) {
  let max;
  for (let arg of args) {
    if (typeof arg == "number") {
      if (typeof max == "undefined") max = arg;
      else if (max < arg) max = arg;
    }
  }
  if (typeof max == "undefined") max = 0;
  return max;
}

exports.avg = function avg(...args) {
  let avg = 0;
  let counter = 0;
  for (let arg of args) {
    if (typeof arg == "number") {
      avg += arg;
      counter++;
    }
  }
  if (counter > 0) avg = avg / counter;
  return avg;
}
