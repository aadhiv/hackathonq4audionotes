'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AudioNoteModel = new Schema(
    {
        'name': String,
        's3Url' : String
    },
    {
        timestamps: {
            createdAt: 'create_date',
            updatedAt: 'update_date'
        }
    });

module.exports = mongoose.model('AudioNote', AudioNoteModel);