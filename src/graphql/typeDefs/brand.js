import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { GroupType } from "./index.js";
import { getGroupByBrandId } from "../resolvers/index.js";
import { isTokenValid } from "../guards/index.js";

export const BrandType = new GraphQLObjectType({
    name: "Brand",
    description: "Represents Brand type",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLInt),
            description: "Id of a Brand and it is mandatory."
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Name of a Brand and it is mandatory."
        },
        groupId: {
            type: new GraphQLNonNull(GraphQLInt),
            description: "Id of an groupnd it is mandatory."
        },
        group: {
            type: new GraphQLList(GroupType),
            description: "Group details of the current Brand.",
            resolve: async ({ groupId }, args, { db, token }) => {
                const user = await isTokenValid(token);
                return await getGroupByBrandId({ groupId }, db);
            },
        }
    }),
})