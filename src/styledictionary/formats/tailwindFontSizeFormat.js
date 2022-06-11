module.exports = function ({ dictionary, options }) {
  let sizesArray = dictionary.allTokens.filter(token => {
    return token.attributes.type === "size"
  })

  let sizes = "module.exports = {\n"

  sizesArray.map((token) => {
    let value = "--" + token.name;

    sizes += `  "${token.attributes.item}":  "var(${value})",\n`
  })

  sizes += "}\n"

  return sizes;
}
