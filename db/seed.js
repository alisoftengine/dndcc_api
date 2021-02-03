const { Model } = require('mongoose');
const Character = require('./models/character');
const data = require('./seed.json');

Character.deleteMany({})
   .then(() => {
      return Character.insertMany(data);
   })
   .then(console.log)
   .catch(console.error)
   .finally(() => {
      process.exit();
   });
