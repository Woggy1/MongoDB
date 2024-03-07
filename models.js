const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entitySchema = new Schema({
    // Описуйте поля сутності тут
});

const EntityModel = mongoose.model('Entity', entitySchema);

module.exports = EntityModel;
