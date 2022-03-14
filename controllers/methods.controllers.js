import { Method, User } from "../models/index";

const getMethods = async(req, res) => {
    try {
        const methods = await Method.findAll();
        res.status(200).json({
            methods
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener los métodos',
            error
        })
    }
}

const createMethod = async(req, res) => {
    try {
        const { name, description, contenthtml, id_user } = req.body;
        const nameUpper = name.toUpperCase();
        const method = await Method.findOne({ name: nameUpper });
        if (method) {
            return res.status(500).json({
                message: 'El método ya existe',
            })
        }

        const newMethod = await Method.create({
            name: nameUpper,
            description,
            contenthtml,
            id_user
        });
        res.status(200).json({
            message: 'Método creado correctamente',
            newMethod
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el método',
            error
        })
    }
}


export {
    getMethods,
    createMethod
}