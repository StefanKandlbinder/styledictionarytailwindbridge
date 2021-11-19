module.exports = {
  format: {
    // Adding a custom format to show how to get an alias's name.
    customFormat: function ({ dictionary, options }) {
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

          // console.log(colors);
          // new option added to decide whether or not to output references
          if (options.outputReferences) {
            // the `dictionary` object now has `usesReference()` and
            // `getReferences()` methods. `usesReference()` will return true if
            // the value has a reference in it. `getReferences()` will return
            // an array of references to the whole tokens so that you can access
            // their names or any other attributes.
            if (dictionary.usesReference(token.original.value)) {
              const refs = dictionary.getReferences(token.original.value);
              refs.forEach(ref => {
                value = value.replace(ref.value, function () {
                  return `${ref.name}`;
                });
              });
            }
          }

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
    jsCustom: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      files: [{
        destination: 'color.tokens.js',
        format: 'customFormat',
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
      }, {
        destination: 'tokens.scss',
        format: 'scss/variables',
        options: {
          outputReferences: true, // new setting, if true will use variable references
        }
      }]
    }
  }
};
