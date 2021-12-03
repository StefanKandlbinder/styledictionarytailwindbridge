const tailwindFontSizeFormat = function ({ dictionary, options }) {
  let sizesArray = dictionary.allTokens.filter(token => {
    return token.attributes.type === "size"
  })

  let sizes = "module.exports = {"

  sizesArray.map((token) => {
    let value = "--" + token.name;

    sizes += `"${token.attributes.item}":"var(${value})",`
  })

  sizes += "}"

  return sizes;
}

module.exports = tailwindFontSizeFormat;
