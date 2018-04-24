import { model } from 'mongoose';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Student = new Schema ({
    firstName: String,
    MiddleName: String,
    LastName: String,
    subject: String,
    contact: Number
});

module.exports = mongoose.model(Student);