// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // 빌드 출력 디렉토리를 dist로 변경
  config.output.path = path.resolve(__dirname, 'dist');

  // public 폴더에서 파일을 복사하도록 설정
  config.plugins = config.plugins.map(plugin => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.options.filename = path.resolve(__dirname, 'dist', 'index.html');
    }
    return plugin;
  });

  return config;
};