import { createServer } from '@graphql-yoga/node'

const server = createServer({
    schema: {
        typeDefs: /* GraphQL */ `
      type Query {
        hello: String,
        name:String
      }
    `,
        resolvers: {
            Query: {
                hello: () => 'Hello Hello Hello',
                name: () => "welcome Mohammed Gamal"
            },
        }
    }
})

server.start()