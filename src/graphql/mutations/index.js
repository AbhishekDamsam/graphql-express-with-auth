import { GraphQLObjectType } from "graphql";
import { BrandMutation } from "./brand.js";
import { GroupMutation } from "./group.js";
import { UserMutation } from "./user.js";

export const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    description: "Root Mutation",
    fields: () => ({
        ...BrandMutation,
        ...GroupMutation,
        ...UserMutation,
    }),
});