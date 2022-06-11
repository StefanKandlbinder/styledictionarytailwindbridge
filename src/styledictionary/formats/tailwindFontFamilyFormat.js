module.exports = function ({ dictionary, options }) {
  let spacingsArray = dictionary.allTokens.filter(token => {
    return token.attributes.type === "family"
  })

  let families = "module.exports = { \n"

  spacingsArray.map((token) => {
    let value = "--" + token.name;

    families += `  ${token.attributes.item}: "var(${value})",\n`
  })

  families += "}\n"

  return families;
}
