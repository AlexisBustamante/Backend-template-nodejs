import jwt from 'jsonwebtoken';
import { User } from '../models/index';
import { JWT_SECRET_KEY } from '../config/config';

const validateJwt = async(req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).send({
            message: 'No hay token en la petición'
        });
    }

    try {
        const { id } = jwt.verify(token, JWT_SECRET_KEY);
        const user = await User.findOne({
            where: { id }
        });

        if (!user || !user.state) {
            return res.status(401).send({
                message: 'El usuario no existe o no está activo'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            message: 'Token inválido'
        });
    }
};

export { validateJwt };