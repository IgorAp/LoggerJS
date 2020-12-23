import { Schema, model } from 'mongoose';

const logSchema = new Schema({
    time: Date,
    level: String,
    hostname: String,
    msg: String,
    application: String,
    errorMessage: String,
    stack: String,
    method: String,
    url: String,
    remoteAddress: String
});

export default model('Log', logSchema);
