import { Role, User } from '../models/index';

const isRoleValid = async(role) => {
    const roleExist = await Role.findOne({
        where: { role }
    });
    if (!roleExist) {
        throw new Error(`El rol ${role} no existe`);
    }
};


const isEmailExist = async(email) => {
    const userExist = await User.findOne({
        where: { email }
    });
    if (userExist) {
        throw new Error(`El usuario con email ${email} ya existe`);
    }
}

const isUserExist = async(id) => {
    const userExist = await User.findOne({
        where: { id }
    });
    if (!userExist) {
        throw new Error(`El usuario con ID: ${id} no existe`);
    }
}


export { isRoleValid, isEmailExist, isUserExist };