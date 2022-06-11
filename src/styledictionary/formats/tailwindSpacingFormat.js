module.exports = function ({ dictionary, options }) {
  let spacingsArray = dictionary.allTokens.filter(token => {
    return token.attributes.category === "spacing"
  })

  let spacings = "module.exports = {\n"

  spacingsArray.map((token) => {
    let value = "--" + token.name;

    spacings += `  ${token.attributes.type}: "var(${value})",\n`
  })

  spacings += "}\n"

  return spacings;
}
