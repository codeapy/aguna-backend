import { app, server } from './app';

const httpServer = app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
server.installSubscriptionHandlers(httpServer);
