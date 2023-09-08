import { GraphQLNonNull, GraphQLString } from "graphql";
import { UserType } from "../typeDefs/index.js";
import { loginUser, registerUser } from "../resolvers/index.js";

const commonTypeAndArguments = {
    type: UserType,
        args: {
            username: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            },
        }
}


export const UserMutation = {
    registerUser: {
        ...commonTypeAndArguments,
        resolve: registerUser
    },
    loginUser: {
        ...commonTypeAndArguments,
        resolve: loginUser
    },
}