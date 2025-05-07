const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home', { nome: "Neymar Junior" });
});


app.get('/tabuada', (req, res) => {
    let resultado = [];
    for (let cont = 1; cont <= 10; cont++) {
        resultado.push (cont * 5);
    }
    res.render ('tabuada' , {valores : resultado});
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
