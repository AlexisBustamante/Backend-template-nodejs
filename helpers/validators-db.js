import { Role, User } from '../models/index';



const isRoleValid = async(role) => {
    try {
        const roleExist = await Role.findOne({
            where: { role }
        });
        if (!roleExist) {
            throw new Error(`El rol ${role} no existe`);
        }
    } catch (error) {
        return error;
    }
};


const isEmailExist = async(email) => {
    try {
        const userExist = await User.findOne({
            where: { email }
        });
        if (userExist) {
            throw new Error(`El usuario con email ${email} ya existe`);
        }
    } catch (error) {
        return error;
    }
}

const isUserExist = async(id) => {
    try {
        const userExist = await User.findOne({
            where: { id }
        });
        if (!userExist) {
            throw new Error(`El usuario con ID: ${id} no existe`);
        }
    } catch (error) {
        return error;
    }
}


export { isRoleValid, isEmailExist, isUserExist };