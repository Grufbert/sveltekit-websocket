import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { Server } from 'socket.io'

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server) {
		if(!server.httpServer) return;
		
		const io = new Server(server.httpServer);

		io.on('connection', (socket) => {
			console.log("New client: %s", socket.id);
			socket.emit('eventFromServer', 'Hello WOrld');
		})
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
