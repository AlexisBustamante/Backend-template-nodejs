import { Category, Document, Subcategory } from "../models";

const getCategories = async(req, res) => {
    try {
        const categories = await Category.findAll({
            include: [{
                model: Subcategory,
                as: 'subcategories',
                include: [{
                    model: Document,
                    as: 'documents'
                }]
            }]
        });
        res.status(200).json({
            total: categories.length,
            categories
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al obtener las categorias",
            error
        });
    }
};

const getCategory = async(req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findOne({
            where: { id }
        });
        res.status(200).json({
            category
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al obtener la categoria",
            error
        });
    }
};


const createCategory = async(req, res) => {
    try {
        const { name } = req.body;
        const newCategory = await Category.create({
            name
        });
        res.status(200).json({
            message: "Categoria creada correctamente",
            newCategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al crear la categoria",
            error
        });
    }
};

const updateCategory = async(req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = await Category.update({
            name
        }, {
            where: { id }
        });
        res.status(200).json({
            message: "Categoria actualizada correctamente",
            updatedCategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al actualizar la categoria",
            error
        });
    }
};


const deleteCategory = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.destroy({
            where: { id }
        });
        res.status(200).json({
            message: "Categoria eliminada correctamente",
            deletedCategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Error al eliminar la categoria",
            error
        });
    }
};


export {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};