const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({
  name: String,
  connections: { type: Number, default: 0 },
  isTop: { type: Boolean, default: false },
  weight: { type: Number, default: 1 }
});

module.exports = mongoose.model('Astrologer', astrologerSchema);
