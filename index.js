const express = require('express');
const app = express();
const charactersRouter = require('./controllers/characters');

//*------= Middleware =------*\\
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//*------= Start Routes =------*\\

app.use('/characters', charactersRouter);

app.get('/', (req, res) => {
   res.send('connection established');
});
//*------= End Routes =------*\\

app.set('port', 3000);

app.listen(app.get('port'), () => {
   console.log(`PORT: ${app.get('port')}`);
});
