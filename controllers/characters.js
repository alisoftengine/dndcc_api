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
   Character.findOneAndUpdate(req.params.id, req.body, { new: true })
      .then(character => res.json(character))
      .catch(err => {
         console.error(err);
         next();
      });
});

router.delete('/:id', (req, res, next) => {
   Character.findOneAndRemove(req.params.id)
      .then(() => res.redirect('/'))
      .catch(err => {
         console.error(err);
         next();
      });
});

module.exports = router;
