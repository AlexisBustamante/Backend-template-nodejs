import { User } from '../models/index';
import { generateHash } from '../helpers/index';

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
        const hash = generateHash(password);
        const newUser = await User.create({
            name,
            email,
            password: hash
        }, {
            returning: ['id', 'name', 'email', 'state', 'id_role']
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
        const { password, ...fieldsUpdate } = req.body;
        if (password) {
            fieldsUpdate.password = generateHash(password);
        }
        const userUpdated = await User.update(fieldsUpdate, {
            where: { id },
            returning: ['id', 'name', 'email', 'state', 'id_role'],
        });
        const userUpdatedData = userUpdated[1][0].dataValues;
        res.status(200).json({
            message: 'Usuario actualizado correctamente',
            userUpdatedData
        })

    } catch (error) {
        console.log(error);
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