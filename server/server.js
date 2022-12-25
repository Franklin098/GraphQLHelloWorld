import {gql, ApolloServer} from 'apollo-server';
// Define our GraphQL Schema

// use GraphQL Schema Definition Language
// define all the possible queries that an user can perform

const typeDefs = gql`
    schema{
        query: Query
    }
    
    type Query {
        greeting: String
    }
`;

// gql -graph ql - converts any string into a GraphQL Schema Object
// instal GraphQL VS Code Extension for getting syntax highlighting.


// Implementation
const resolvers = {
    // should match the type definition
    Query:{
        // every time the Client creates a greeting query the resolver -resolves- using this function
        greeting: ()=> 'Hello World!'
        // since it is a function you can call a database inside, or create a random result
    }
}


const server = new ApolloServer({typeDefs,resolvers});

const serverInfo = await server.listen({port:9000});

console.log(`Server running at ${serverInfo.url}`);

