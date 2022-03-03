import pool from "../database/keys";

const metodos = {};
 metodos.todos = async (req,res) => {
    try {
        const metodos = await (await pool.query(`SELECT * FROM metodos`)).rows;
        res.status(200).json({
            metodos
        })
    } catch (error) {
        res.status(500).json({
            message: 'ocurrio un error',
            error
        })
    }
}

metodos.NuevoMetodo = async (req, res) => {
    const { name, description, contenthtml, id_usuario } = req.body;
   // console.log(req.body)
    try {

       const record= await (await pool.query(
            `INSERT INTO metodos(
	    name,description,contenthtml,id_usuario)
	    VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, description, contenthtml, id_usuario]
        )).rows[0];

        res.status(200).json({
            message: 'Registro creado Correctamente',
            record
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No es posible Almacenar métodos con el mismo nombre.',
            error
        })
    }

 }

metodos.EliminarMetodo = async (req, res) => { 
    const id = req.params.id;

    
    console.log(id);
    try {
        
        const record = await(await pool.query(`
        DELETE FROM metodos WHERE id=$1 returning *
        `, [id])).rows[0];

        res.status(200).json({
            message: 'Registro Eliminado.',
            record
        })

    } catch (error) {
        res.status(500).json({
            message:'No fue posible eliminar Registro'
        })
    }
} 

metodos.EditarMetodo = async (req, res) => { 
    const { id, name, description, contenthtml, datecreate } = req.body;
    const dateupdate = new Date();
    console.log(req.body, dateupdate);
    try {
        const record = (await pool.query(`
        UPDATE metodos
        SET 
        name=$1, description=$2, contenthtml=$3, dateupdate=$4,datecreate=$6
        WHERE id=$5
        returning *`, [name, description, contenthtml, dateupdate, id, datecreate])).rows[0];
        
        res.status(200).json({
            message: 'Método actualizado.',
            record
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ocurrio un error al actualizar',
            error
        })
    }

}

module.exports = metodos;
