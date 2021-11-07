# @josundt/stylelint-config #

> Ruleset for css and sass (scss) code style and linting

## Migrate from @josundt/sass-lint-config ##

> If you have previously used `@josundt/sass-lint-config`, follow these instructions to remove: 

1. Uninstall `@josundt/sass-lint-config`, ensure dependency is removed from `devDependencies`

2. Remove `sasslintConfig` property from `package.json`

3. Remove all `sass-lint-ignore*` comments from scss files

4. Remove npm script `lint:sass` (or similar) from `package.json` if exists

5. Remove `glen-84.sass-lint` from recommended extensions `.vscode\extensions.json`.   
   Uninstall exension from VSCode _(optional)_.

## Usage of @josundt/stylelint-config ##
1. Install this package 

2. Add a `.stylelintrc` file in the workspace root with the following content: 
    ```json
    {
      "extends": ["@josundt/stylelint-config"]
    }
    ``` 

3. Add a `.stylelintignore` file in the workspace root with typically the following content: 
    ```text
    dist/**/*
    node_modules/**/*
    test.results/**/*
    test.coverage/**/*
    ```

4. Add npm task in **package.json**
    ```json
    {
      // ...
      "scripts": {
        // ...
        "lint:style": "stylelint **/*.{css,scss} -f unix"
        // ...
      }
      // ...
    }
    ```

5. When using Visual Studio Code:  

    __a)__ Install the `stylelint.vscode-stylelint` VSCode extension.
    
    __b)__ Add it as a workspace recommended workspace extension through `.vscode/extensions.json` file:
      ```json
      {
        "recommendations": [
          // ...
          "stylelint.vscode-stylelint"
          // ...
        ]
        // ...
      }
      ```

    __c)__ Configure the extension from __b)__ by adding the following to the workspace `.vscode/settings.json` file:
      ```json
      {
        // ...
        "scss.validate": false,
        "stylelint.validate": ["scss"]
        // ...
      }
      ```

    __d)__ Add a task in `.vscode/tasks.json` to enable running stylelint as a VSCode task for the entire workspace:
    ```json
    {
      "version": "2.0.0",
      "runner": "terminal",
      "tasks": [
        // ...
        {
          "label": "lint:style",
          "type": "shell",
          "command": "npx",
          "args": [
            "stylelint",
            "'**/*.{css,scss}'",
            "-f",
            "unix"
          ],
          "group": "build",
          "presentation": {
            "echo": true,
            "reveal": "silent",
            "focus": false,
            "panel": "shared"
          },
          "problemMatcher": {
            "fileLocation": "absolute",
            "source": "Stylelint",
            "pattern": {
              "regexp": "^(.+):(\\d+):(\\d+): (.+ \\((.*)\\)) \\[(error|warning|info)\\]$",
              "file": 1,
              "line": 2,
              "column": 3,
              "message": 4,
              "code": 5,
              "severity": 6
            }
          }
        }
        // ...
      ]
    }
    ```
  