import express from 'express';
import http from 'node:http';
import createBareServer from '@tomphttp/bare-server-node';
import { handler as ssrHandler } from './dist/server/entry.mjs';


const httpServer = http.createServer();
const app = express();

app.use(express.static('dist/client/'))
app.use(ssrHandler);

const bareServer = createBareServer('/bare/');

httpServer.on('request', (req, res) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
		app(req, res);
	}
});

httpServer.on('upgrade', (req, socket, head) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

httpServer.on('listening', () => {
	console.log('HTTP server listening');
});


httpServer.listen({
	port: 4040,
});