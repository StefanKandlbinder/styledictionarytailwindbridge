// import customColorFormat from './formats/customColorFormat';
const tailwindColorFormatRGB = require('./formats/tailwindColorFormatRGB');
const tailwindSpacingFormat = require('./formats/tailwindSpacingFormat');
const tailwindFontFamilyFormat = require('./formats/tailwindFontFamilyFormat');
const tailwindFontWeightFormat = require('./formats/tailwindFontWeightFormat');
const tailwindFontSizeFormat = require('./formats/tailwindFontSizeFormat');
const tailwindShadowFormat = require('./formats/tailwindShadowFormat');

module.exports = {
  format: {
    // Transforming colors to a tailwind.confing.js color Object
    tailwindColorFormatRGB: tailwindColorFormatRGB,

    // Transforming spacings to a tailwind.confing.js spacing Object
    tailwindSpacingFormat: tailwindSpacingFormat,

    // Transforming font families to a tailwind.confing.js fontFamily Object
    tailwindFontFamilyFormat: tailwindFontFamilyFormat,

    // Transforming font weights to a tailwind.confing.js fontWeight Object
    tailwindFontWeightFormat: tailwindFontWeightFormat,

    // Transforming font sizes to a tailwind.confing.js fontSize Object
    tailwindFontSizeFormat: tailwindFontSizeFormat,

    // Transforming shadows to a tailwind.confing.js boxShadow Object
    tailwindShadowFormat: tailwindShadowFormat
  },

  source: ['src/styledictionary/tokens/**/*.json', '!src/styledictionary/tokens/tailwind/*.json'],
  platforms: {
    json: {
      buildPath: 'src/assets/styles/',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      prefix: "stb",
      files: [{
        destination: 'tokens.json',
        format: 'json'
      }]
    },
    jsCustomColor: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      prefix: "stb",
      files: [{
        destination: 'color.tokens.tailwind.js',
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
      prefix: "stb",
      files: [{
        destination: 'spacing.tokens.tailwind.js',
        format: 'tailwindSpacingFormat',
        options: {
          outputReferences: false
        }
      }]
    },
    jsCustomFontFamily: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      prefix: "stb",
      files: [{
        destination: 'font.family.tokens.tailwind.js',
        format: 'tailwindFontFamilyFormat',
        options: {
          outputReferences: false
        }
      }]
    },
    jsCustomFontWeight: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      prefix: "stb",
      files: [{
        destination: 'font.weight.tokens.tailwind.js',
        format: 'tailwindFontWeightFormat',
        options: {
          outputReferences: false
        }
      }]
    },
    jsCustomFontSize: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      prefix: "stb",
      files: [{
        destination: 'font.size.tokens.tailwind.js',
        format: 'tailwindFontSizeFormat',
        options: {
          outputReferences: false
        }
      }]
    },
    jsCustomShadow: {
      buildPath: 'src/assets/styles/',
      transformGroup: 'js',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      prefix: "stb",
      files: [{
        destination: 'shadow.tokens.tailwind.js',
        format: 'tailwindShadowFormat',
        options: {
          outputReferences: false
        }
      }]
    },
    js: {
      buildPath: 'src/assets/styles/',
      transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
      transformGroup: 'js',
      prefix: "stb",
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
      prefix: "stb",
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
