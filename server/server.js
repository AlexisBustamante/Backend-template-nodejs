//con babel config
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileupload from 'express-fileupload';
import history from 'connect-history-api-fallback';
import path from 'path';

import configurations from '../config/config';


//Routes Imports
import authRouter from '../routes/auth.routes';
import methodsRouter from '../routes/methods.routes';
import usersRouter from '../routes/users.routes';

//Paths
const paths = {
    auth: '/api/auth',
    methods: '/api/methods',
    users: '/api/users',
};


//Initializations
const app = express();

//Settings
app.set('port', configurations.SERVER_PORT || 3000);

//Middlewares
app.use(morgan('tiny'));
app.use(cors()); //permite acceder a nuestro servidior desd eotros dominios
app.use(express.urlencoded({ extended: true })); //para recibir rutas y url
app.use(express.json()); //para que nuestor servidor envie y reciba json
app.use(fileupload({ useTempFiles: true })); //para los Archivos
// app.use(history());

//Routes
app.use(paths.auth, authRouter);
app.use(paths.methods, methodsRouter);
app.use(paths.users, usersRouter);



export default app;