import { GraphQLObjectType } from "graphql";
import { BrandQuery } from "./brand.js";
import { GroupQuery } from "./group.js";
import { UserQuery } from "./user.js";

export const RootQuery = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        ...BrandQuery,
        ...GroupQuery,
        ...UserQuery,
    }),
});