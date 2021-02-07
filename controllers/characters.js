const express = require('express');
const router = express.Router();
const Character = require('../db/models/character');

router.get('/', (req, res) => {
   Character.find({}).then(characters => res.json(characters));
});

router.get('/:id', (req, res) => {
   Character.findById(req.params.id).then(character => res.json(character));
});

router.post('/', (req, res, next) => {
   Character.create(req.body)
      .then(character => res.json(character))
      .catch(err => {
         console.error(err);
         next();
      });
});

router.put('/:id', (req, res, next) => {
   Character.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(character => res.json(character))
      .catch(err => {
         console.error(err);
         next();
      });
});

router.delete('/:id', (req, res, next) => {
   Character.findByIdAndDelete(req.params.id)
      // .then(() => res.redirect('/characters'))
      .then(() => res.send('OK!'))
      .catch(err => {
         console.error(err);
         next();
      });
});

module.exports = router;
