import { GraphQLList } from "graphql";
import { UserType } from "../typeDefs/index.js";
import { isTokenValid } from "../guards/index.js";
import { getAllUsers } from "../resolvers/user.js";

export const UserQuery = {
    users: {
        type: new GraphQLList(UserType),
        description: "List of all Users",
        args: {
            // We can use this argument to even filter out the list of groups
        },
        resolve: async(parent, args, { db, token }) => {
            const user = await isTokenValid(token);
            return await getAllUsers({ }, db);
        },
    },
}