
exports.min = function min(args) {
  if(!args) return 0;
  if(args.isArray==false) return 0;
  if(args.length==0) return 0;
  let min;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] == "number") {
      if (typeof min == "undefined") min = args[i];
      else if (min > args[i]) min = args[i];
    }
  }
  if (typeof min == "undefined") min = 0;
  return min;
}

exports.max = function max(args) {
  if(!args) return 0;
  if(args.isArray==false) return 0;
  if(args.length==0) return 0;
  let max;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] == "number") {
      if (typeof max == "undefined") max = args[i];
      else if (max < args[i]) max = args[i];
    }
  }
  if (typeof max == "undefined") max = 0;
  return max;
}

exports.avg = function avg(args) {
  if(!args) return 0;
  if(args.isArray==false) return 0;
  if(args.length==0) return 0;
  let avg = 0;
  let counter = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] == "number") {
      avg += args[i];
      counter++;
    }
  }
  if (counter > 0) avg = avg / counter;
  return avg;
}
