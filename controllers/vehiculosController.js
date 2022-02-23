import pool from "../database/keys";

const vehiculos = {};

vehiculos.misVehiculos = async (req,res)=>{
  const { id_usr } = req.body;
    try {
        const vehiculos = await (await pool.query(`
    select  (clientes.c_nombre || clientes.c_apellidos ) as ve_propietario,
        vehiculos.ve_patente,
        vehiculos.ve_año,
        modelo.modeldesc,
        marca.marcdesc
	FROM vehiculos
	    JOIN modelo ON vehiculos.ve_id_modelo=modelo.modelid
	    JOIN marca ON modelo.marcid=marca.marcid
	    JOIN clientes ON vehiculos.ve_id_cliente=clientes.c_id
	    JOIN usuarios ON vehiculos.ve_id_usr=usuarios.id_usr;   
        `)).rows;
        res.status(200).json(vehiculos);
    } catch (error) {
        res.status(500).json({
            message: 'Ocurrio un error',
            error
        });
    }
};

module.exports = vehiculos;
