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
import categoriesRouter from '../routes/categories.routes';
import documentsRouter from '../routes/documents.routes';
import rolesRouter from '../routes/roles.routes';
import subcategoriesRouter from '../routes/subcategories.routes';
import usersRouter from '../routes/users.routes';

//Paths
const paths = {
    auth: '/api/auth',
    categories: '/api/categories',
    documents: '/api/documents',
    roles: '/api/roles',
    subcategories: '/api/subcategories',
    users: '/api/users',
};


//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('tiny'));
app.use(cors()); //permite acceder a nuestro servidior desd eotros dominios
app.use(express.urlencoded({ extended: true })); //para recibir rutas y url
app.use(express.json()); //para que nuestor servidor envie y reciba json
app.use(fileupload({ useTempFiles: true })); //para los Archivos
// app.use(history());

//Routes
app.use(paths.auth, authRouter);
app.use(paths.categories, categoriesRouter);
app.use(paths.documents, documentsRouter);
app.use(paths.roles, rolesRouter);
app.use(paths.subcategories, subcategoriesRouter);
app.use(paths.users, usersRouter);



export default app;