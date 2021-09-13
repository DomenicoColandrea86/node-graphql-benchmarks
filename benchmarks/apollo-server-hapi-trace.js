"use strict";

const { ApolloServer } = require("apollo-server-hapi");
const Hapi = require('@hapi/hapi');

const app = Hapi.server({ port: 4001 });
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
	tracing: true
});

server.applyMiddleware({ app });
app.start();
