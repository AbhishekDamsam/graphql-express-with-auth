import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import { BrandType } from "./index.js";
import { getBrandByGroupId } from "../resolvers/index.js";
import { isTokenValid } from "../guards/index.js";


export const GroupType = new GraphQLObjectType({
    name: "Group",
    description: "Represents Group type",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLInt), //Setting up no null constraint
            description: "Id of agroup and it is mandatory."
        },
        name: {
            type: new GraphQLNonNull(GraphQLString), //Setting up no null constraint
            description: "Name of a group and it is mandatory."
        },
        brands: {
            type: new GraphQLList(BrandType), //If type is of list, we have to resolve it
            description: "Contains brands information of the current Group",
            resolve: async({ id }, args, { db, token }) => {
                const user = await isTokenValid(token);
                return await getBrandByGroupId({ id }, db);
            },
        }
    }),
});
