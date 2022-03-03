import {Pool} from 'pg';

const pool = new Pool({
    host: 'ec2-52-204-196-4.compute-1.amazonaws.com',
    port:'5432',
    user: 'bfpohqhorkwzzc',
    database: 'd9a3jj530bs57b',
    password:'241f8df56fb12f1825b2d163bd3ca130706e3fa9ce417a233afd86763dcda38c',
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;
