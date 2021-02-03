const mongoose = require('../connection');

const characterSchema = new mongoose.Schema({
   player: String,
   campaign: String,
   name: { type: String, required: true },
   sex: { type: String, enum: ['male', 'female'] },
   race: {
      type: String,
      enum: [
         'human',
         'hill dwarf',
         'mountain dwarf',
         'high elf',
         'wood elf',
         'lightfoot halfling',
         'stout halfling'
      ]
   },
   class: {
      type: String,
      enum: ['cleric', 'strong fighter', 'quick fighter', 'rogue', 'wizard']
   },
   abilities: {
      strength: { type: Number, min: 3, max: 18 },
      dexterity: { type: Number, min: 3, max: 18 },
      constitution: { type: Number, min: 3, max: 18 },
      intelligence: { type: Number, min: 3, max: 18 },
      wisdom: { type: Number, min: 3, max: 18 },
      charisma: { type: Number, min: 3, max: 18 }
   },
   background: {
      type: String,
      enum: ['acolyte', 'criminal', 'folk hero', 'noble', 'sage', 'soldier']
   },
   alignment: {
      type: String,
      enum: [
         'lawful good',
         'neutral good',
         'chaotic good',
         'lawful neutral',
         'neutral neutral',
         'chaotic neutral',
         'lawful evil',
         'neutral evil',
         'chaotic evil'
      ]
   },
   created: { type: Date, default: Date.now }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
