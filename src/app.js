import express from 'express';
import { GraphQLSchema, GraphQLError } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import expressPlayground from 'graphql-playground-middleware-express';
import { RootQuery, RootMutation } from './graphql/index.js';
import { API_EXPOSED } from '../config.js';


export const setupServer = async (db) => {
    const app = express();

    app.use(express.json());

    //Works only with use and all middleware fn
    app.use(API_EXPOSED, createHandler({
        schema: new GraphQLSchema({ query: RootQuery, mutation: RootMutation, }),
        context: async (req, res) => {
            const { authorization: token } = req.headers;
            return { db, token };
        },
        formatError: (err) => {
            return new GraphQLError(err.message);
        }
    })); 

    // route to use the Graphql playground, we can disable in production if required
    app.get('/playground', expressPlayground.default({ 
        endpoint: API_EXPOSED,
        settings: { "schema.polling.enable": false } // To disable frequent introspection query operation calls
    }));

    return app;
}