const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "checkbox",
        name: "features",
        message: "¿Qué configuración de ESLint quieres?",
        choices: [
          {
            name: "typescript",
            checked: true,
          },
          {
            name: "next",
          },
          {
            name: "simple",
          },
          {
            name: "javascript",
          },
        ],
      },
    ])

    if (answers.features.includes("javascript")) {
      this.composeWith(require.resolve("./eslint/javascript"))
    }

    if (answers.features.includes("typescript")) {
      this.composeWith(require.resolve("./eslint/typescript"))
    }

    if (answers.features.includes("next")) {
      this.composeWith(require.resolve("./eslint/next"))
    }
    if (answers.features.includes("simple")) {
      this.composeWith(require.resolve("./eslint/simple"))
    }
  }
}
