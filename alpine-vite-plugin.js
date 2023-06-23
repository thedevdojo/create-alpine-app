export default function AlpineVitePlugin() {
  return {
    name: 'alpine-vite-plugin',
    handleHotUpdate({ file, server }) {
        // hot reload for any file change
        server.ws.send({
            type: 'full-reload',          
            path: '*'
        });
    },
  }
}