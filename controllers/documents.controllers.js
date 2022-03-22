import { Document, User } from "../models/index";

const getDocuments = async(req, res) => {
    try {
        const documents = await Document.findAll({
            where: { state:true }
        });
        res.status(200).json({
            total: documents.length,
            documents
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error al obtener los documentos',
            error
        })
    }
}


const getDocument = async(req, res) => {
    try {
        const { id } = req.params;
        const document = await Document.findOne({
            where: { id }
        });

        res.status(200).json({
            document
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el documento',
            error
        })
    }
}


const createDocument = async(req, res) => {
    try {
        const { name, description, contenthtml, id_user, id_subcategory } = req.body;
        const document = await Document.create({
            name,
            description,
            contenthtml,
            id_user,
            id_subcategory
        });

        res.status(200).json({
            message: 'Documento creado correctamente',
            document
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el documento',
            error
        })
    }
}

const updateDocument = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, description, contenthtml, id_user, id_subcategory } = req.body;
        const document = await Document.update({
            name,
            description,
            contenthtml,
            id_user,
            id_subcategory
        }, {
            where: { id },
            returning: ['id', 'name', 'description', 'contenthtml', 'id_user', 'id_subcategory']
        });
        res.status(200).json({
            message: 'documento actualizado correctamente',
            document
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el documento',
            error
        })
    }
}


const deleteDocument = async(req, res) => {
    try {
        const { id } = req.params;
        const document = await Document.update(
            {
            state: false,
            },
            {
                where: { id }
            });

        res.status(200).json({
            message: 'Documento eliminado correctamente',
            document
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el documento',
            error
        })
    }
}

const getDocumentsById = async(req, res) => {
    try {
        const { id_subcategory } = req.params;
        const document = await Document.findAll({
            where: { id_subcategory }
        });

        res.status(200).json({
            document
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el documento',
            error
        })
    }
}


export {
    getDocuments,
    getDocument,
    getDocumentsById,
    createDocument,
    updateDocument,
    deleteDocument
}