import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/config";


const generateJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        jwt.sign(payload, JWT_SECRET_KEY, {
            expiresIn: "1d",
        }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        })
    })
}

export { generateJWT };