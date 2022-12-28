const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/api', {
			target: 'http://10.82.17.149:8080', 
			changeOrigin: true,
		})
	);
};