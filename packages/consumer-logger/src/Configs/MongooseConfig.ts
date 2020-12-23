import mongoose from 'mongoose';

mongoose.connect(process.env.ConnectionString as string, { useNewUrlParser: true });

mongoose.Promise = global.Promise;