module.exports = {
  "plugins": [
    "stylelint-order",
    "stylelint-config-rational-order-fix/plugin"
  ],
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-rational-order-fix",
    "stylelint-config-sass-guidelines"
  ],
  "rules": {
    // only lowerCamelCase, ex: .cardsWrapper
    "max-line-length": 150,
    "selector-class-pattern": "^[a-z]+(-?[a-zA-Z0-9]+)*$",
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    "max-nesting-depth": [2, { ignore: ["blockless-at-rules", "pseudo-classes"] }],
    "order/properties-alphabetical-order": null,
    "string-quotes": "single",
    "indentation": [2],
    "no-descending-specificity": null,
    "at-rule-empty-line-before": null,
    "color-hex-case": "upper",
    "declaration-empty-line-before": "never",
    "color-hex-length": "long",

    "scss/selector-no-redundant-nesting-selector": null,
  }
}
