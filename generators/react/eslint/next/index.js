const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  installDependencies() {
    this.npmInstall(
      [
        "prettier",
        "eslint",
        "eslint-config-prettier",
        "eslint-config-standard",
        "eslint-config-next",
        "eslint-plugin-import",
        "eslint-plugin-node",
        "eslint-plugin-prettier",
        "eslint-plugin-promise",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks",
        "@typescript-eslint/parser",
        "@typescript-eslint/eslint-plugin",
      ],
      {"save-dev": true}
    )
  }

  eslint() {
    this.fs.copy(this.templatePath(".eslintrc"), this.destinationPath(".eslintrc"))

    this.fs.copy(this.templatePath(".vscode"), this.destinationPath(".vscode"))

    this.fs.copy(this.templatePath(".eslintignore"), this.destinationPath(".eslintignore"))

    this.fs.copy(this.templatePath(".editorconfig"), this.destinationPath(".editorconfig"))
  }
}
