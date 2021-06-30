//
//
// async function expectSuccessfulQuery(request: any, queryBody: string) {
//   const response = await request
//     .post('/graphql')
//     .send({
//       query: `
//           {
//             ${queryBody}
//           }
//         `,
//     })
//     .set('Content-Type', 'application/json')
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200);
//   return response.body;
// }
