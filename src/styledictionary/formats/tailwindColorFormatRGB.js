module.exports = function ({ dictionary, options }) {
  let colorsArray = dictionary.allTokens.filter(token => {
    return token.attributes.category === "color"
  })

  const uniqueTypes = colorsArray
    .map(item => item.attributes.type)
    .filter((value, index, self) => self.indexOf(value) === index)

  let colors = "module.exports = {\n"

  uniqueTypes.map(uniqueType => {
    colors += `  ${uniqueType}: {`;
    hasItems = false;

    colorsArray.map((token) => {
      let value = "--" + token.name;
      let type = token.attributes.type;
      let item = token.attributes.item;

      let opacityVariable = `return \`rgba(var(${value}), \${opacityVariable})\``
      let opacityValue = `return \`rgba(var(${value}), \${opacityValue})\``
      let variable = `return \`rgba(var(${value}))\``

      if (uniqueType === type) {
        if (item !== undefined) {
          hasItems = true;
          colors += `
    ${[item]}: 'rgba(var(${value}) / <alpha-value>)',`
        }
        else if (item === undefined) {
          hasItems = false;
          colors = colors.slice(0, -3);
          colors += `: 'rgba(var(${value}) / <alpha-value>)',`
        }
      }
    })
    hasItems ? colors += "\n  },\n" : colors += "\n"
  })
  colors += "}\n"

  return colors;
}
