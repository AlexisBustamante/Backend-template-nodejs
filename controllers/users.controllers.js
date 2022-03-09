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

const getUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id }
        });
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el usuario',
            error
        })
    }
}

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
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
            name,
            email,
            hash
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

const updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        if (password) {
            const salt = bcrypt.genSaltSync();
            const hash = bcrypt.hashSync(password, salt);
        }
        const userUpdated = await User.update({
            name,
            email,
            password
        }, {
            where: { id }
        });

        res.status(200).json({
            message: 'Usuario actualizado correctamente',
            userUpdated
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el usuario',
            error
        })
    }
}

const deleteUser = async(req, res) => {}



export {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}