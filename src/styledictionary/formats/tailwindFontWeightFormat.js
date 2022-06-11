module.exports = function ({ dictionary, options }) {
  let weightsArray = dictionary.allTokens.filter(token => {
    return token.attributes.type === "weight"
  })

  let weights = "module.exports = {\n"

  weightsArray.map((token) => {
    let value = "--" + token.name;

    weights += `  ${token.attributes.item}: "var(${value})",\n`
  })

  weights += "}\n"

  return weights;
}
