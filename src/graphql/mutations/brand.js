import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { BrandType } from "../typeDefs/index.js";
import { addBrand } from "../resolvers/index.js";


export const BrandMutation = {
    addBrand: {
        type: BrandType,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            groupId: {
                type: new GraphQLNonNull(GraphQLInt)
            },
        },
        resolve: async(parent, { name, groupId }, { db, token }) => {
            const user = await isTokenValid(token);
            return await addBrand({ name, groupId }, db);
        },
    },
}