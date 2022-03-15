import { createServer } from "http"

const server = createServer((req, res) => {

    const url = req.url;
    if (url === "/") {
        res.writeHead(200, { "Content-type": "text/html" })
        res.write(`<h2>WELCOME TO THE INDEX PAGE</h2>`)
        res.write("Gidilebilecek Sayfa Listesi 1-/ 2-/aboutme 3-/contact")
    }
    else if (url === "/aboutme") {
        res.writeHead(200, { "Content-type": "text/html" })
        res.write(`<h2>WELCOME TO THE ABOUT ME PAGE</h2>`)
        res.write("Gidilebilecek Sayfa Listesi 1-/ 2-/aboutme 3-/contact")
    }
    else if (url === "/contact") {
        res.writeHead(200, { "Content-type": "text/html" })
        res.write(`<h2>WELCOME TO THE CONTACT PAGE</h2>`)
        res.write("Gidilebilecek Sayfa Listesi  1-/ 2-/aboutme 3-/contact")
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.write(`<h2> 404 SAYFA BULUNAMADI</h2>`)
        res.write("Gidilebilecek Sayfa Listesi  1-/ 2-/aboutme 3-/contact")
    }
    res.end();
})

const port = 5000;

server.listen(port,()=>{
    console.log(`server ${port}'unda başlatıldı `);
})