import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

let personas = [];

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundoo! ');
});

app.get('/numero', (req, res) => {
    res.send("42");
});

app.get('/usuario', (req, res) => {
    res.json({ "nombre": "Ana", "edad": 25 });
});

app.get('/productos', (req, res) => {
    res.json(["Mouse", "Teclado", "Monitor"]);
});

app.get('/materias', (req, res) => {
    res.json([{ "nombre": "Matemática" }, { "nombre": "Lengua" }]);
});

app.get('/personas', (req, res) => {
    res.json(personas);
});

app.post('/agregarPersona', (req, res) => {
    const persona = req.body;
    const nombre = persona.nombre;
    const apellido = persona.apellido;

    let ultimoId;

    if (personas.length > 0) {
        ultimoId = personas[personas.length - 1].id;
    } else {
        ultimoId = 0;
    }

    const nuevoId = ultimoId + 1;

    const nuevaPersona = { id: nuevoId, nombre, apellido };
    personas.push(nuevaPersona);

    res.send(`Agregaste a: ${nombre} ${apellido} con ID ${nuevoId}`);
});

app.delete('/personas/:id', (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const persona = personas.find(p => p.id === idBuscado);

    if (persona) {
        personas = personas.filter(p => p.id !== idBuscado);
        res.send(`Persona con ID ${idBuscado} eliminada`);
    } else {
        res.status(404).send({ error: "Persona no encontrada" });
    }
});

app.listen(port,() => {
    console. log(`Listening on http://localhost:${port}`)
})