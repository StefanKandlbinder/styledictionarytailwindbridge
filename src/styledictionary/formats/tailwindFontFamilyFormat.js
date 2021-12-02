const tailwindFontFamilyFormat = function ({ dictionary, options }) {
  let spacingsArray = dictionary.allTokens.filter(token => {
    return token.attributes.type === "family"
  })

  let families = "module.exports = {"

  spacingsArray.map((token) => {
    let value = "--" + token.name;

    families += `${token.attributes.item}:"var(${value})",`
  })

  families += "}"

  return families;
}

module.exports = tailwindFontFamilyFormat;
