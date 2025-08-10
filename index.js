import express from "express";

const app = express();

const PORT = 8080;

app.get('/', (req, res) =>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('This is the get response');
});

app.get('/login', (req, res) =>{
    res.send("This is the login page")
})

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
})