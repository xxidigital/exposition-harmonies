module.exports = {
  entry: {
    app: ['./_sources/styles/app.scss', './_sources/scripts/app.js'],
    types: ['./_sources/styles/types.css']
  },
  local: 'http://localhost',
  port: 3003,
  folder: '/exposition-harmonies',
  html: false,
  assets_url: '/assets/',  // Build Folder
  assets_path: './assets/', // Build Path
  data_path: './_data/', // Datas Folder
  sources_path: './_sources/', // Sources Folder
  //refresh: ['./**/*.html'] // Permet de forcer le rafraichissement du navigateur lors de la modification de ces fichiers
}
