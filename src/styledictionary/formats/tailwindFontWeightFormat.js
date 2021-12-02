const tailwindFontWeightFormat = function ({ dictionary, options }) {
  let weightsArray = dictionary.allTokens.filter(token => {
    return token.attributes.type === "weight"
  })

  let weights = "module.exports = {"

  weightsArray.map((token) => {
    let value = "--" + token.name;

    weights += `${token.attributes.item}:"var(${value})",`
  })

  weights += "}"

  return weights;
}

module.exports = tailwindFontWeightFormat;
