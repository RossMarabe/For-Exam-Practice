const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: { type: String, defualt: '' },
  director: { type: String, default: '' },
  year: { type: Number },
  actor: { type: String, default: '' },
  franchise: { type: String, default: '' }
});

mongoose.model('Movie', MovieSchema);
