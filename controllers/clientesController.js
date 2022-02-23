import pool from "../database/keys";
const clientes = {};

clientes.todos = async (req, res) => {
  //const { id_usr } = req.body;
  //  console.log(req.body);

  try {
    const clientes = await (
      await pool.query(
        `
    select * from clientes
     ` )
    ).rows;

    // console.log(clientes);
    res.status(200).json(clientes);

  } catch (error) {
    res.status(500).json({
      message: "Ocurrio un Error",
      error,
    });
  }
};

clientes.MisClientes = async (req, res) => {
  const { id_usr } = req.body;
  //  console.log(req.body);
  try {
    const clientes = await (
      await pool.query(
        `
    select c_id,c_nombre, c_apellidos, c_email, c_telefono, c_direccion
    from clientes
    WHERE usr_id=$1;`,
        [id_usr]
      )
    ).rows;

    // console.log(clientes);
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrio un Error",
      error,
    });
  }
};

clientes.NuevoCliente = async (req, res) => {
  console.log(req.body);
  const { usr_id, c_nombre, c_apellidos, c_direccion, c_telefono, c_email } =
    req.body;

  try {
    await pool.query(
      `INSERT INTO clientes(
	    usr_id, c_nombre, c_apellidos, c_email, c_telefono, c_direccion)
	    VALUES ($1, $2, $3, $4, $5, $6)`,
      [usr_id, c_nombre, c_apellidos, c_email, c_telefono, c_direccion]
    );
    const cliente = await (
      await pool.query(`SELECT * FROM clientes order by c_id DESC LIMIT 1`)
    ).rows[0];

    res.status(200).json({
      message: "Cliente creado correctamente",
      cliente,
    });
  } catch (error) {
    res.status(500).json({
      message: "ocurrio un error",
      error,
    });
  }
};

clientes.EliminarCliente = async (req, res) => {
 //console.log(req.params.c_id);
  const c_id = req.params.c_id;
  try {
    await pool.query(`DELETE FROM clientes where c_id=$1`, [c_id]);
    res.status(200).json({
      message: "Cliente eliminado",
    });
  } catch (error) {

    var mensaje = '';

    if (error.constraint = 'vehiculo_ve_id_cliente_fkey') {
      mensaje = 'No es posible eliminar cliente ya que tiene vehiculos inscritos';
    } else {
            mensaje = 'No es posible eliminar cliente';
    }

     res.status(500).json({
       message: mensaje,
       error
    });
  }
};
clientes.EditarCliente = async (req, res) => {
  const date = new Date();
  //console.log(date);
  const c_id = req.params.c_id;
  const { usr_id, c_nombre, c_apellidos, c_email, c_telefono, c_direccion } =
    req.body;
 // console.log(req.body);

  try {
    await pool.query(
      `
  UPDATE clientes
	SET  usr_id=$2,
    c_nombre=$3,
    c_apellidos=$4,
   c_email=$5,
    c_telefono=$6,
     c_direccion=$7,
      c_fechamodificacion=$8
	WHERE c_id=$1;
    `,
      [
        c_id,
        usr_id,
        c_nombre,
        c_apellidos,
        c_email,
        c_telefono,
        c_direccion,
        date,
      ]
    );

    res.status(200).json({
      message: 'Cliente modificado'
    });

  } catch (error) {
    res.status(500).json({
      message: "No fue posible actualizar registro",
      error,
    });
  }
};

clientes.VehiculosCliente = async (req, res) => {
  const c_id = req.params.c_id;
    console.log(c_id);

  try {
    
const vehiculos = await (await pool.query(`
  SELECT 
        vehiculos.ve_id,
        ve_id_cliente,
        vehiculos.ve_patente,
        vehiculos.ve_año as año,
        modelo.modeldesc as modelo,
        marca.marcdesc as marca
FROM vehiculos
	JOIN modelo ON vehiculos.ve_id_modelo=modelo.modelid
	JOIN marca ON modelo.marcid=marca.marcid
WHERE ve_id_cliente=$1;`,[c_id])).rows;
    
    res.status(200).json({
      message: '',
      vehiculos
    })

  } catch (error) {
    res.status(500).json({
      message:'error de comunicacion'
    })
  }


  
};

module.exports = clientes;
