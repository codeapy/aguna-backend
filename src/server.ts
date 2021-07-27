import { app, server } from './app';

const httpServer = app.listen({ port: 4001 }, () =>
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
);
server.installSubscriptionHandlers(httpServer);
