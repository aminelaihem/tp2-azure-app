const http = require("http");
const port = process.env.PORT || 8080;
// Ici on lit la variable d'environnement MON_MESSAGE
const message = process.env.MON_MESSAGE || "Hello depuis Azure App Service !";

http.createServer((req,res) => {
    res.end(message);
}).listen(port);
