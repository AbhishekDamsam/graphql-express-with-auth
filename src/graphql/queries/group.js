import { GraphQLInt, GraphQLList } from "graphql";
import { GroupType } from "../typeDefs/index.js";
import { getGroupById, getAllGroups } from "../resolvers/index.js";
import { isTokenValid } from "../guards/index.js";

export const GroupQuery = {
    group: {
        type: GroupType,
        description: "Single group details",
        args: {
            id: {
                type: GraphQLInt,
            }
        },
        resolve: async(parent, { id }, { db, token }) => {
            const user = await isTokenValid(token);
            return await getGroupById({ id }, db);
        },
    },
    groups: {
        type: new GraphQLList(GroupType),
        description: "List of all groups",
        args: {
            // We can use this argument to even filter out the list of groups
        },
        resolve: 
        async(parent, args, { db, token }) => {
            const user = await isTokenValid(token);
            return await getAllGroups({ }, db);
        },
    },
}