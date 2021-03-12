import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from "graphql-tools";
import 'dotenv/config';

import{ Model } from 'objection';
import connection from './database/connection';

Model.knex(connection);


const port = process.env.PORT || 4004;

//https://blog.logrocket.com/integrating-typescript-graphql/
//https://dev.to/wonder2210/graphql-typescript-postgresql-api-271g
//https://github.com/ReactFinland/graphql-api

import getTypeDefs from './types';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

//Enuns and Types of elements
import Types from './resolvers/Types';

const startServer = () => {
    try {
        var app = express();

        const resolvers = {
            ...Types,
            Query,
            Mutation
        };
        const typeDefs = getTypeDefs();

        const schema = makeExecutableSchema({ typeDefs, resolvers });

        app.use(
            "/graphql",
            graphqlHTTP({
            schema: schema,
            graphiql: true
            })
        );
        app.listen(port);
        console.log(`Server is running on: \nhttp://localhost:${port}/graphql`)

    } catch (e) {
        console.log(e.message);
      throw new Error(e.message);
    }
};

startServer();
