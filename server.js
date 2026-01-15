import express from 'express';
import 'dotenv/config';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send('<h1>Welkom Home!</h1>');
});


app.get('/about', (req, res) => {
    res.send('<h1>Over Ons</h1><p>Met Express gaat dit veel sneller.</p>');
});

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    // sends the data back to the JSON
    res.json(users);

});

app.use((req, res) => {
    res.status(404).send('Opes, 404! Pagina niet gevonden.');
});

app.listen(port, () => {
 console.log(`Server luistert op http://localhost:${port}`);
});