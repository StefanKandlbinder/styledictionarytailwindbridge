// import customColorFormat from './formats/customColorFormat';
const customColorFormat = require('./formats/customColorFormat');
const customSpacingFormat = require('./formats/customSpacingFormat');

module.exports = {
  format: {
    // Transforming colors to a tailwind.confing.js color Object
    customColorFormat: customColorFormat,
    // Transforming spacings to a tailwind.confing.js spacing Object
    customSpacingsFormat: customSpacingFormat
  },

  source: ['src/styledictionary/tokens/**/*.json', '!src/styledictionary/tokens/tailwind/*.json'],
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
