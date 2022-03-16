import { Subcategory } from "../models";

const getSubcategories = async(req, res) => {
    try {
        const subcategories = await Subcategory.findAll();
        res.status(200).json({
            total: subcategories.length,
            subcategories
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al obtener las subcategorias",
            error
        });
    }
};


const getSubcategory = async(req, res) => {
    try {
        const { id } = req.params;
        const subcategory = await Subcategory.findOne({
            where: { id }
        });
        res.status(200).json({
            subcategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al obtener la subcategoria",
            error
        });
    }
};

const createSubcategory = async(req, res) => {
    try {
        const { name, id_category } = req.body;
        const newSubcategory = await Subcategory.create({
            name,
            id_category,
        });
        res.status(200).json({
            message: "Subcategoria creada correctamente",
            newSubcategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al crear la subcategoria",
            error
        });
    }
};


const updateSubcategory = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, id_category } = req.body;
        const updatedSubcategory = await Subcategory.update({
            name,
            id_category
        }, {
            where: { id }
        });
        res.status(200).json({
            message: "Subcategoria actualizada correctamente",
            updatedSubcategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al actualizar la subcategoria",
            error
        });
    }
};

const deleteSubcategory = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedSubcategory = await Subcategory.update({
            state: false,
            where: { id }
        });
        res.status(200).json({
            message: "Subcategoria eliminada correctamente",
            deletedSubcategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al eliminar la subcategoria",
            error
        });
    }
};


export {
    getSubcategories,
    getSubcategory,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory
};