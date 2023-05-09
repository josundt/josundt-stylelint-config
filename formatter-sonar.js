const path = require("path");

/**
 * Sonar severity type
 * @constant
 * @type {Record<import("stylelint").Severity, string>}
 */
const SONARQUBE_SEVERITY = {
    warning: "MINOR",
    error: "CRITICAL"
};

/**
 * Sonar finding type
 * @constant
 * @type {Record<import("stylelint").Severity, string>}
 */
const SONARQUBE_TYPE = {
    warning: "CODE_SMELL",
    error: "BUG"
};

/**
 * The formatter
 * @param {Array<import("stylelint").LintResult>} results The stylelint results
 * @returns { string } The output report
 */
function formatter(results) {
    const issues = [];

    if (Array.isArray(results) && results.length > 0) {
        for (const result of results) {
            let relativePath =
                typeof result.source !== "undefined"
                    ? path.relative(process.cwd(), result.source)
                    : "";

            for (const warning of result.warnings) {
                issues.push({
                    engineId: "stylelint",
                    ruleId: warning.rule,
                    severity: SONARQUBE_SEVERITY[warning.severity],
                    type: SONARQUBE_TYPE[warning.severity],
                    primaryLocation: {
                        message: warning.text,
                        filePath: relativePath,
                        textRange: {
                            startLine: warning.line,
                            startColumn: warning.column,
                            endLine: warning.line,
                            endColumn: warning.column
                        }
                    }
                });
            }
        }
    }

    // eslint-disable-next-line unicorn/no-null
    return JSON.stringify({ issues: issues }, null, 2);
}

module.exports = formatter;
