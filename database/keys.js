import {Pool} from 'pg';

const pool = new Pool({
    host:'localhost',
    port:'5432',
    user: 'postgres',
    database: 'REPOBD',
    password:'admin'
    
});

module.exports = pool;
