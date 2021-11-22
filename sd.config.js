module.exports = {
  format: {
    // Adding a custom format to show how to get an alias's name.
    customColorFormat: function ({ dictionary, options }) {
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
    },
    customSpacingsFormat: function ({ dictionary, options }) {
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
  },

  source: ['src/tokens/**/*.json', '!src/tokens/tailwind/*.json'],
  platforms: {
    json: {
      buildPath: 'src/assets/styles/',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      files: [{
        destination: 'tokens.json',
        format: 'json'
      }]
    },
    jsCustomColor: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      files: [{
        destination: 'color.tokens.js',
        format: 'customColorFormat',
        options: {
          outputReferences: false
        }
      }]
    },
    jsCustomSpacing: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      files: [{
        destination: 'spacing.tokens.js',
        format: 'customSpacingsFormat',
        options: {
          outputReferences: false
        }
      }]
    },
    js: {
      buildPath: 'src/assets/styles/',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      transformGroup: 'js',
      files: [{
        destination: 'tokensModule.js',
        format: 'javascript/module',
        options: {
          outputReferences: true
        }
      }]
    },
    css: {
      transformGroup: 'css',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      buildPath: 'src/assets/styles/',
      prefix: "one",
      files: [{
        destination: 'tokens.css',
        format: 'css/variables',
        options: {
          outputReferences: true, // new setting, if true will use variable references
        }
      }]
    }
  }
};
