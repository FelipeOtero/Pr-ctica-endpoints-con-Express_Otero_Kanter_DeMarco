import express from 'express';
const app= express();

const port = 3000;  

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
}),

app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundoo! ');
}),

app.get('/numero', (req, res) => {
    res.send("42");
}),

app.get('/usuario', (req, res) => {
    res.send({ "nombre": "Ana", "edad": 25 });
}), 

app.get('/productos', (req, res) => {
    res.send([ "Mouse", "Teclado", "Monitor" ]);
}),

app.get('/materias', (req, res) => {
    res.send([ { "nombre": "Matemática" }, { "nombre": "Lengua" } ]);
}),

app.listen(port,() => {
    console. log(`Listening on http://localhost:${port}`)
})