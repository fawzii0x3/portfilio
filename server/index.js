const http = require("http");
const app = require("./src/app");

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

async function startServer() {
  server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
}
startServer();
