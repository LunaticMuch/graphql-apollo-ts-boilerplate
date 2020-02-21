import {ApolloServer} from 'apollo-server';
import fs from 'fs';

const typeDefs = fs.readFileSync("./schema.graphql", "utf8").toString();

const server = new ApolloServer ({
    typeDefs,
    // resolvers,  Don't use if no resolvers
    mocks:true, 
    introspection:true,
    debug:true
})

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });