import { JWT_SECRET } from "../../../config.js";
import { verifyToken } from "../../utils.js";


export const isTokenValid = async (token) => {
    try {
        if (!token) throw new Error("Token required");
        
        //Assuming token format = "Bearer ${token}"
        const bearerToken = token.split(" ");

        const user = await verifyToken(bearerToken[1], JWT_SECRET);
        return user;
    }
    catch (e) {
        throw e;
    }
}