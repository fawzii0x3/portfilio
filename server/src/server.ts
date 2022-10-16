import https from "https";
import http from "http";
import path from "path";
import app from "./app";
import fs from 'fs'
import PORT from './constant'


// const server = https.createServer({
//     key:fs.readFileSync(path.join(__dirname,'../cert/key.pem')),
//     cert:fs.readFileSync(path.join(__dirname,'../cert/cert.pem'))
// },app);
const server = http.createServer(app)

async function mainServer() {
  server.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
  });
}

mainServer().catch((err)=>{
  console.log(err)
})
