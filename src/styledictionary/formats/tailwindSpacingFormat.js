const tailwindSpacingFormat = function ({ dictionary, options }) {
  let spacingsArray = dictionary.allTokens.filter(token => {
    return token.attributes.category === "spacing"
  })

  let spacings = "module.exports = {"

  spacingsArray.map((token) => {
    let value = "--" + token.name;

    spacings += `${token.attributes.type}:"var(${value})",`
  })

  spacings += "}"

  return spacings;
}

module.exports = tailwindSpacingFormat;
