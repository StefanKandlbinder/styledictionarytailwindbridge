const tailwindShadowFormat = function ({ dictionary, options }) {
  let shadowsArray = dictionary.allTokens.filter(token => {
    return token.attributes.category === "shadow"
  })

  let shadows = "module.exports = {"

  shadowsArray.map((token) => {
    let value = "--" + token.name;

    shadows += `"${token.attributes.type}":"var(${value})",`
  })

  shadows += "}"

  return shadows;
}

module.exports = tailwindShadowFormat;
