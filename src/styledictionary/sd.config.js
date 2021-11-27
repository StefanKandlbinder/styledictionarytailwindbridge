// import customColorFormat from './formats/customColorFormat';
const tailwindColorFormatRGB = require('./formats/tailwindColorFormatRGB');
const tailwindSpacingFormat = require('./formats/tailwindSpacingFormat');

module.exports = {
  format: {
    // Transforming colors to a tailwind.confing.js color Object
    tailwindColorFormatRGB: tailwindColorFormatRGB,

    // Transforming spacings to a tailwind.confing.js spacing Object
    tailwindSpacingFormat: tailwindSpacingFormat
  },

  source: ['src/styledictionary/tokens/**/*.json', '!src/styledictionary/tokens/tailwind/*.json'],
  platforms: {
    json: {
      buildPath: 'src/assets/styles/',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      prefix: "one",
      files: [{
        destination: 'tokens.json',
        format: 'json'
      }]
    },
    jsCustomColor: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      prefix: "one",
      files: [{
        destination: 'color.tokens.js',
        format: 'tailwindColorFormatRGB',
        options: {
          outputReferences: false
        }
      }]
    },
    jsCustomSpacing: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      prefix: "one",
      files: [{
        destination: 'spacing.tokens.js',
        format: 'tailwindSpacingFormat',
        options: {
          outputReferences: false
        }
      }]
    },
    js: {
      buildPath: 'src/assets/styles/',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      transformGroup: 'js',
      prefix: "one",
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
