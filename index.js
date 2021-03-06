const express = require('express');
const cors = require('cors');
const charactersRouter = require('./controllers/characters');

const app = express();

//*------= Middleware =------*\\
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//*------= Start Routes =------*\\
app.use('/characters', charactersRouter);

app.get('/', (req, res) => {
   res.render('index.html');
});
//*------= End Routes =------*\\

//*------= Start App =------*\\
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
   console.log(`PORT: ${app.get('port')}`);
});
