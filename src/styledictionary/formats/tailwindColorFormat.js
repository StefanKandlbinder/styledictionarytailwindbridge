const tailwindColorFormat = function ({ dictionary, options }) {
  let colorsArray = dictionary.allTokens.filter(token => {
    return token.attributes.category === "color"
  })

  const uniqueTypes = colorsArray
    .map(item => item.attributes.type)
    .filter((value, index, self) => self.indexOf(value) === index)

  let colors = "module.exports = {"

  uniqueTypes.map(uniqueType => {
    colors += `${uniqueType}: {`;

    colorsArray.map((token) => {
      let value = "--one-" + token.name;
      let type = token.attributes.type;
      let item = token.attributes.item;

      let opacityVariable = "return `rgba(var(" + value + "), ${opacityVariable})`"
      let opacityValue = "return `rgba(var(" + value + "), ${opacityValue})`"
      let variable = "return `rgba(var(" + value + "))`"

      if (uniqueType === type) {
        colors += `
          ${[item]}:
            ({ opacityVariable, opacityValue }) => {
              if (opacityValue !== undefined) {
                ${opacityValue}
              }
              if (opacityVariable !== undefined) {
                ${opacityVariable}
              }
                ${variable}
            },`
      }
    })
    colors += "},"
  })
  // console.log(colors);
  colors += "}"

  return colors;
}

module.exports = tailwindColorFormat;
