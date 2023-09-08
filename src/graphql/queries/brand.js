import { GraphQLInt, GraphQLList } from "graphql";
import { BrandType } from "../typeDefs/index.js";
import { getBrandById, getAllBrands } from "../resolvers/index.js";
import { isTokenValid } from "../guards/index.js";

export const BrandQuery = {
    brand: {
        type: BrandType,
        description: "Single Brand details",
        args: {
            id: {
                type: GraphQLInt,
            }
        },
        resolve: async(parent, { id }, { db, token }) => {
            const user = await isTokenValid(token);
            return await getBrandById({ id }, db);
        }
    },
    brands: {
        type: new GraphQLList(BrandType),
        description: "List of all brands",
        args: {
            // We can use this argument to even filter out the list of brands
        },
        resolve: async(parent, { id }, { db, token }) => {
            const user = await isTokenValid(token);
            return await getAllBrands({ id }, db);
        },
    },
}