import { encryptPassword, signToken, verifyPassword } from "../../utils.js";


export const registerUser = async (parent, { username, password }, context) => {
    const { userCollection } = context.db;

    const hashedPassword = await encryptPassword(password);

    if (!userCollection.find(user => user.username == username)) {
        const userId = userCollection.length + 1;
        const newUser = { userId, username, password: hashedPassword };
        userCollection.push(newUser);
        return {
            userId,
            username,
        };
    }

    // Handle users on re-registeration
    return false;
}

export const loginUser = async (parent, { username, password }, context) => {
    const { userCollection } = context.db;
    const user = userCollection.find(user => user.username == username)

    if (user) {
        const isValidPassword = await verifyPassword(user.password, password);
        if (!isValidPassword) {
            throw new Error("Invalid password");
          }

        return {
            userId: user.userId,
            username,
            token: signToken({ userId: user.userId }),
        };
    }

    // Handle login failed
    return false;
}

export const getAllUsers = async({}, db) => db.userCollection;