import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { GroupType } from "../typeDefs/index.js";
import { addGroup, editGroup } from "../resolvers/index.js";
import { isTokenValid } from "../guards/index.js";


export const GroupMutation = {
    addGroup: {
        type: GroupType,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
        },
        resolve: async (parent, { name }, { db, token }) => {
            const user = await isTokenValid(token);
            return await addGroup({ name }, db);
        }
    },
    editGroup: {
        type: GroupType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLInt)
            },
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
        },
        resolve: 
        async (parent, args, { db, token }) => {
            const user = await isTokenValid(token);
            return await editGroup({ }, db);
        }
    },
}