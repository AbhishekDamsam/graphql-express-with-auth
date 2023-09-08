import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";


export const UserType = new GraphQLObjectType({
    name: "User",
    description: "User Login",
    fields: () => ({
        userId: {
            type: GraphQLInt,
            description: "User Id"
        },
        username: {
            type: GraphQLString,
            description: "Username"
        },
        password: {
            type: GraphQLString,
            description: "Password"
        },
        token: {
            type: GraphQLString,
            description: "Token for login"
        }
    })
})