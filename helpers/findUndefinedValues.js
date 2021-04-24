module.exports.findUndefinedValues = (param) => {
  var params = Object.entries(param);

  const len = params.length;
  let undefinedVariable = [];
  for (let i = 0; i < len; i++) {
    let values = params[i];
    var a = values.indexOf(undefined);

    if (a === 1) {
      undefinedVariable.push(values[0]);
    }
  }
  return undefinedVariable;
}

