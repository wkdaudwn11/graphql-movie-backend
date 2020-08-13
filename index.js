import { GraphQLServer } from "graphql-yoga";

/**
 * Schema란?
 * 사용자에게 보내거나, 사용자로부터 받을 data에 대한 설명
 */
const server = new GraphQLServer({});

server.start(() => console.log("Graphql Server Running.."));
