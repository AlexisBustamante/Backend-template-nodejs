import { Role } from "../models";

const getRoles = async(req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({
            total: roles.length,
            roles
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al obtener los roles",
            error
        });
    }
};

const getRole = async(req, res) => {
    try {
        const { id } = req.params;
        const role = await Role.findOne({
            where: { id }
        });
        res.status(200).json({
            role
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al obtener el rol",
            error
        });
    }
};

const createRole = async(req, res) => {
    try {
        const { name, description } = req.body;
        const newRole = await Role.create({
            name,
            description
        });
        res.status(200).json({
            message: "Rol creado correctamente",
            newRole
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al crear el rol",
            error
        });
    }
};


const updateRole = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updatedRole = await Role.update({
            name,
            description
        }, {
            where: { id }
        });
        res.status(200).json({
            message: "Rol actualizado correctamente",
            updatedRole
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al actualizar el rol",
            error
        });
    }
};


const deleteRole = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedRole = await Role.update({
            state: false,
            where: { id }
        });
        res.status(200).json({
            message: "Rol eliminado correctamente",
            deletedRole
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al eliminar el rol",
            error
        });
    }
};

export {
    getRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
}