

export const getBrandById = async ({ id }, db) => {
    return db.brandCollection.find(brand => brand.id == id);
}


export const getBrandByGroupId = async ({ id }, db) => {
    return db.brandCollection.filter((brand) => brand.groupId == id);
}

export const getAllBrands = async ({ }, db) => db.brandCollection;

export const addBrand = async ({ name, groupId }, db) => {
    const { brandCollection } = db;
    const brand = { id: brandCollection.length + 1, name, groupId };
    brandCollection.push(brand);
    return brand;
}


// import { GraphQLInt, GraphQLList } from "graphql";
// import { BrandType } from "../typeDefs/index.js";
// import { getBrandById, getAllBrands } from "../resolvers/index.js";
// import { isTokenValid } from "../guards/index.js";

// export const BrandQuery = {
//     brand: {
//         type: BrandType,
//         description: "Single Brand details",
//         args: {
//             id: {
//                 type: GraphQLInt,
//             }
//         },
//         resolve: async(parent, { id }, { db, token }) => {
//             const user = await isTokenValid(token);
//             return await getBrandById({ id }, db);
//         }
//     },
//     brands: {
//         type: new GraphQLList(BrandType),
//         description: "List of all brands",
//         args: {
//             // We can use this argument to even filter out the list of brands
//         },
//         resolve: async(parent, { id }, { db, token }) => {
//             const user = await isTokenValid(token);
//             return await getAllBrands({ id }, db);
//         },
//     },
// }