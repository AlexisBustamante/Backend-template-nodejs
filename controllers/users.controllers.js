import { User } from '../models/index';

const getUsers = async(req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            users
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los usuarios',
            error
        })
    }
};

const createUser = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({
            where: { email }
        });
        console.log(user);
        if (user) {
            return res.status(500).json({
                message: 'El usuario ya existe',
            })
        }
        const newUser = await User.create({
            name,
            email,
            password
        });
        res.status(200).json({
            message: 'Usuario creado correctamente',
            newUser
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el usuario',
            error
        })
    }
}




export {
    getUsers,
    createUser
}