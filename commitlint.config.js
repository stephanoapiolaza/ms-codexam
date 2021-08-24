const Configuration = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      "header-max-length": () => [0, "always", 100],
    }
  }
  module.exports  = Configuration;