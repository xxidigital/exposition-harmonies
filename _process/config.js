module.exports = {
  entry: {
    app: ['./_static/styles/app.css', './_static/scripts/app.js']
  },
  local: 'http://localhost',
  port: 3003,
  html: false,
  assets_url: '/assets/',  // Urls dans le fichier final
  assets_path: './assets/', // ou build ?
  data_path: './_data/', // ou build ?
  refresh: ['./**/*.html'] // Permet de forcer le rafraichissement du navigateur lors de la modification de ces fichiers
}
