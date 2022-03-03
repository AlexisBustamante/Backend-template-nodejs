import pool from "../database/keys";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const authentication = {};

authentication.servicio = async (req, res) => { 

  const body = req.body;

  const entrevistas = [{
    name: "entrevitsa1",
    desc: 'es un ejemplo'
  }, {
    name: "entrevitsa2",
    desc: 'es un ejemplo 2'
  }];

  try {
    res.json({
      entrevistas
    });

  
} catch (error) {
  
  res.status(500).json({
    message: 'Ocurrio un error',
    error
  })
}


}

authentication.register = async (req, res) => {
  const { email, password, name, id_rol } = req.body;
  let passHash = await bcryptjs.hash(password, 8);

  

  try {

    await pool.query(`INSERT INTO users(
	 name, email, password, id_rol)
	VALUES ($1, $2, $3, $4) `, [name, email, passHash, id_rol]);


    res.status(200).json({
      message:'Usuario Creado'
    });

  } catch (error) {

    console.log(error);
    var message = 'ocurrio un error';

    if (error.constraint = "users_email_key") { 
      message = `El correo (${email}) ya está registrado`;
    }
    res.status(500).json({
      message,
      error
    })
  }


},

authentication.login = async (req, res) => {

  const { email, password } = req.body;

  try {

    const users = await (await pool.query('select * from users where email=$1', [email])).rows[0];
     
    let hashSaved = users.password;
    let compare = bcryptjs.compareSync(password, hashSaved);

    if (compare) {
      //creo un TOKEN de sesión
        let token = jwt.sign({
          data: {
            id: users.id,
            email: users.email,
            name: users.name
          }
        }, 'secret', { expiresIn: 60 * 60 * 24 * 30})//expira en 30 dias

      res.status(200).json({
          message:'Loageado',
          id: users.id,
          email: users.email,
          name: users.name,
            token
          })
              
      
    
      } else {
        res.status(400).json({
          message: 'Usuario no existe o la constraseña es incorrecta',
        })
      }
  
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Ocurrio un error',
    })
  }



},


  authentication.signIn = async (req, res) => {
    const { email, password } = req.body;

    //console.log(req.body);

    try {
      const usuario = await (
        await pool.query(
          `SELECT usuarios.id_usr, usuarios.usr_name, usuarios.usr_email, roles_usr.name_rol from usuarios
        JOIN roles_usr ON usuarios.usr_id_rol=roles_usr.id_rol
        where usuarios.usr_email=$1 AND usuarios.usr_password=$2`,
          [email, password]
        )
      ).rows;

      if (usuario.length > 0) {
        res.status(200).json({
          id_usr: usuario[0].id_usr,
          usr_name: usuario[0].usr_name,
          usr_email: usuario[0].usr_email,
          usr_rol: usuario[0].name_rol
        })
      } else {
        res.status(400).json({
          message: "Usuario no Existe o la contraseña es incorrecta",
          NotFound: true,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "ocurrio un error",
        error,
      });
    }
  };

module.exports = authentication;
