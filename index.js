const express = require('express');
const cors = require('cors');
const charactersRouter = require('./controllers/characters');

const app = express();

//*------= Middleware =------*\\
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

//*------= Start Routes =------*\\
app.use('/characters', charactersRouter);

app.get('/', (req, res) => {
   res.render('welcome');
});
//*------= End Routes =------*\\

//*------= Start App =------*\\
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
   console.log(`PORT: ${app.get('port')}`);
});
