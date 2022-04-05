const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/random', {
      target: 'https://randomuser.me',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/api/random': '',
      },
    })
  );
};
