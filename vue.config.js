const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,  // Transpila dependências de terceiros
  configureWebpack: {
    entry: "./src/main.js",  // Ponto de entrada da aplicação
    devServer: {
      hot: true,  // Ativa o hot reload
    },
    watchOptions: {
      ignored: /node_modules/,  // Ignora a pasta node_modules ao monitorar mudanças
      poll: 1000,  // Intervalo de verificação de mudanças (1 segundo)
    },
  },
});