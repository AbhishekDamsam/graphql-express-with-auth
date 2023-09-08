import { hash, verify } from "argon2";
import jwt from "jsonwebtoken";
import { JWT_SECRET, TOKEN_EXPIRY } from "../config.js";
import { GraphQLError } from "graphql";


export const encryptPassword = async (password) => {
    return await hash(password);
}

export const verifyPassword = async (hashValue, password) => {
    try {
        return await verify(hashValue, password);
    }
    catch (e) {
        throw new GraphQLError("Invalid Password");
    }
}

export const signToken = async (data) => {
    // the token expiry is 5mins
    return jwt.sign(data, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
}

// Refresh token feature and must be stored in the database
//export const refreshToken = () => {};

export const verifyToken = async (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    }
    catch (e) {
        throw new GraphQLError("Invalid Token");
    }

}