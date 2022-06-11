module.exports = function ({ dictionary, options }) {
  let shadowsArray = dictionary.allTokens.filter(token => {
    return token.attributes.category === "shadow"
  })

  let shadows = "module.exports = {\n"

  shadowsArray.map((token) => {
    let value = "--" + token.name;

    shadows += `  "${token.attributes.type}": "var(${value})",\n`
  })

  shadows += "}\n"

  return shadows;
}
