import bcrypt from "bcryptjs";

const generateHash = (password) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export { generateHash };