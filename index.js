'use strict';

module.exports = {
    extends: ["stylelint-config-standard-scss"],
    defaultSeverity: "error",
    overrides: [
        {
            files: ["**/*.scss", "**/*.css"],
            customSyntax: "postcss-scss",
            rules: {
                "selector-class-pattern": [
                    "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
                    { "message": "Expected class selector to follow BEM conventions" }
                ],
                "selector-id-pattern": [
                    "^([a-z][a-z0-9]*)([-]{1,2}[a-z0-9]+)*$",
                    { "message": "Expected id selector to be follow BEM conventions" }
                ],
                "alpha-value-notation": undefined,                              // default: "percentage"        ALLOW BOTH PERCENTAGE AND NUMBER TO SPECIFY OPACITY FOR RGBA COLORS
                "block-closing-brace-empty-line-before": undefined,             // default: "never",            ALLOW EMPTY LINE BEFORE CLOSING BRACE
                "block-opening-brace-space-before": undefined,                  // default: "always"            ALLOW HORIZONTALLY ALIGNMENT OF RULE BLOCKS
                "declaration-block-single-line-max-declarations": 1,            // default: 1                   MAX NUMBER OF DECLARATIONS FOR ONE LINE BLOCKS
                "declaration-empty-line-before": undefined,                     // default: "never"             ALLOW EMOTY LINES BETWEEN DECLARATIONS
                "declaration-no-important": true,                               // default: false               AVOID !important
                "function-url-quotes": "always",                                // default: null
                "no-descending-specificity": undefined,                         // default: true                DISABLED -- REQUIRES MANY CHANGES
                "selector-max-id": 0                                            // default: false
            }
        },
        {
            files: ["**/*.scss"],
            customSyntax: "postcss-scss",
            rules: {
                "scss/at-import-partial-extension": undefined,                  // default: "never"             SKIP IMPORT ANALYSIS
                "scss/dollar-variable-empty-line-before": undefined,            // default: "always+exceptions" DO NOT REQUIRE STRICT RULES FOR NEWLINES BETWEEN SASS VARIABLES  - NB! disabled formatting style related rule
                "scss/double-slash-comment-empty-line-before": undefined,       // default: "always"            DO NOT REQUIRE NEW LINE BEFORE COMMENTS - NB! disabled formatting style related rule
                "scss/operator-no-newline-after": undefined,                    // default: true                DISALLOW LINEBREAKS AFTER SASS OPERATORS - NB! disabled formatting style related rule
                "scss/operator-no-newline-before": undefined,                   // default: true                DISALLOW LINEBREAKS BEFORE SASS OPERATORS - NB! disabled formatting style related rule
                "scss/operator-no-unspaced": undefined,                         // default: true                DISALLOW LINEBREAKS BEFORE SASS OPERATORS - NB! disabled formatting style related rule
                "scss/selector-nest-combinators": "always",                     // default: false               FORCE NESTING IN SASS
                "scss/at-import-partial-extension": "always",                   // default: undefined           REQUIRE OR DISALLOW EXTENSION IN @IMPORT COMMANDS.
                "scss/at-import-partial-extension-blacklist": ["scss", "sass"]  // default: undefined           SPECIFY WHITELIST OF ALLOWED FILE EXTENSIONS FOR PARTIAL NAMES IN @IMPORT COMMANDS.

            }
        }
    ]
};
