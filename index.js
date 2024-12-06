"use strict";

module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-prettier/recommended"
    ],
    defaultSeverity: "error",
    overrides: [
        {
            files: ["**/*.scss", "**/*.css"],
            customSyntax: "postcss-scss",
            rules: {
                "prettier/prettier": true, // Include PRETTIER warnings

                "selector-class-pattern": [
                    "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
                    {
                        message:
                            "Expected class selector to follow BEM conventions"
                    }
                ],
                "selector-id-pattern": [
                    "^([a-z][a-z0-9]*)([-]{1,2}[a-z0-9]+)*$",
                    {
                        message:
                            "Expected id selector to be follow BEM conventions"
                    }
                ],
                "alpha-value-notation": null, // default: "percentage"                         ALLOW BOTH PERCENTAGE AND NUMBER TO SPECIFY OPACITY FOR RGBA COLORS
                "declaration-block-single-line-max-declarations": 1, // default: 1             MAX NUMBER OF DECLARATIONS FOR ONE LINE BLOCKS
                "declaration-empty-line-before": null, // default: "never"                     ALLOW EMPTY LINES BETWEEN DECLARATIONS
                "declaration-no-important": true, // default: false                            AVOID !important
                "function-url-quotes": "always", // default: null
                "no-descending-specificity": null, // default: true                            DISABLED -- REQUIRES MANY CHANGES
                "selector-max-id": 0, // default: false

                // ===== Disabled formatting-style related rules that potentially conflict with Prettier ====
                "comment-empty-line-before": null,
                "custom-property-empty-line-before": null,
                "rule-empty-line-before": null
            }
        },
        {
            files: ["**/*.scss"],
            customSyntax: "postcss-scss",
            rules: {
                "scss/selector-nest-combinators": "always", // default: false                  FORCE NESTING IN SASS
                "scss/load-partial-extension":    "always", // default: null                   REQUIRE OR DISALLOW EXTENSION IN @IMPORT COMMANDS.
                "scss/at-import-partial-extension-disallowed-list": [
                    "scss",
                    "sass"
                ], // default: null                                                            SPECIFY WHITELIST OF ALLOWED FILE EXTENSIONS FOR PARTIAL NAMES IN @IMPORT COMMANDS.

                // ===== Disabled formatting-style related rules that potentially conflict with Prettier ====
                "scss/at-else-closing-brace-newline-after": null,
                "scss/at-else-closing-brace-space-after": null,
                "scss/at-else-empty-line-before": null,
                "scss/at-else-if-parentheses-space-before": null,
                "scss/at-function-parentheses-space-before": null,
                "scss/at-if-closing-brace-newline-after": null,
                "scss/at-if-closing-brace-space-after": null,
                "scss/at-mixin-parentheses-space-before": null,
                "scss/dollar-variable-colon-space-after": null,
                "scss/dollar-variable-colon-space-before": null,
                "scss/dollar-variable-empty-line-before": null,
                "scss/double-slash-comment-empty-line-before": null,
                "scss/double-slash-comment-whitespace-inside": null,
                "scss/operator-no-newline-after": null,
                "scss/operator-no-newline-before": null,
                "scss/operator-no-unspaced": null
            }
        }
    ]
};
