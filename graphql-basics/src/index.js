/*import { message } from './myModule';
import addNumbers, { subtractNumbers } from './math';

console.log('Hello addition is', addNumbers(5, 6));
console.log('Hello subtraction is', subtractNumbers(5, 6));*/

import { GraphQLServer } from 'graphql-yoga';

// Type Definations (Schema)
const typeDefs = `
type Query{
   hello: String! 
}
`

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my First GraphQL Query';
        }
    }
}


const server = new GraphQLServer({ typeDefs: typeDefs, resolvers: resolvers });

server.start(() => {
    console.log('Server is Started');
});