import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, Role } from '../models/index';
import { configuration } from '../config/config';


const authentication = {};
    authentication.login = async(req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({
                where: { email },
                include: [{
                    model: Role,
                    required: true,
                    
                }]
            });

            let hashSaved = user.password;
            let compare = bcryptjs.compareSync(password, hashSaved);

            if (compare) {
                //creo un TOKEN de sesión
                let token = jwt.sign({
                        data: {
                        id: user.id,
                        email: user.email,
                        name: user.name
                        }
                    }, 'secret', { expiresIn: 60 * 60 * 24 * 30 }) //expira en 30 dias
        
                res.status(200).json({
                    message: 'Loageado',
                    user,
                    token
                })

            } else {
                res.status(400).json({
                    message: 'Usuario no existe o la constraseña es incorrecta',
                })
            }

        } catch (error) {
            res.status(400).json({
                error,
                message: 'Ocurrio un error',
            })
        }

    },


module.exports = authentication;