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

// metodos.EliminarMetodo = async(req, res) => {
//     const id = req.params.id;


//     console.log(id);
//     try {

//         const record = await (await pool.query(`
//         DELETE FROM metodos WHERE id=$1 returning *
//         `, [id])).rows[0];

//         res.status(200).json({
//             message: 'Registro Eliminado.',
//             record
//         })

//     } catch (error) {
//         res.status(500).json({
//             message: 'No fue posible eliminar Registro'
//         })
//     }
// }

// metodos.EditarMetodo = async(req, res) => {
//     const { id, name, description, contenthtml, datecreate } = req.body;
//     const dateupdate = new Date();
//     console.log(req.body, dateupdate);
//     try {
//         const record = (await pool.query(`
//         UPDATE metodos
//         SET 
//         name=$1, description=$2, contenthtml=$3, dateupdate=$4,datecreate=$6
//         WHERE id=$5
//         returning *`, [name, description, contenthtml, dateupdate, id, datecreate])).rows[0];

//         res.status(200).json({
//             message: 'Método actualizado.',
//             record
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Ocurrio un error al actualizar',
//             error
//         })
//     }

// }

export {
    getMethods,
    createMethod
}