const ftoc = function(ftocInput) {
  ftocOutput = (ftocInput-32)*(5/9);
  ftocOutput = Math.round(ftocOutput * 10) / 10
  return ftocOutput;
}

const ctof = function(ctofInput) {
  ctofOutput = ctofInput*(9/5)+32;
  ctofOutput = Math.round(ctofOutput * 10) / 10
  return ctofOutput;
}

module.exports = {
  ftoc,
  ctof
}
