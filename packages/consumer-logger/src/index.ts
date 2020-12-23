import split from 'split2'
import pump from 'pump';
import through from 'through2';

import './Configs/MongooseConfig';
import mongoTransport from './MongoTransport';

const transport = through.obj(mongoTransport);

export default () => {
    pump(process.stdin, split(JSON.parse), transport);
}