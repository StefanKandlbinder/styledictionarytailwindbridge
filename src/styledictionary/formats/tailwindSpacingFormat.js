const tailwindSpacingFormat = function ({ dictionary, options }) {
  let spacingsArray = dictionary.allTokens.filter(token => {
    return token.attributes.category === "spacing"
  })

  const uniqueTypes = spacingsArray
    .map(item => item.attributes.type)
    .filter((value, index, self) => self.indexOf(value) === index)

  let spacings = "module.exports = {"

  spacingsArray.map((token) => {
    let value = "--one-" + token.name;

    spacings += `${token.attributes.type}:"var(${value})",`
  })

  spacings += "}"

  return spacings;
}

module.exports = tailwindSpacingFormat;
