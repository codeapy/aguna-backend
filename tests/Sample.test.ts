// import supertest from 'supertest';
// import { createTestContext } from './__helpers';
// import { app } from '../src/app';
// import helpers from './utils/helpers';
//
// const request = supertest(app.callback());
// const prismaContext = createTestContext();
//
// describe('userPublicProfile query shows profile correctly', () => {
//   const userPublicProfileQuery = `
//         userPublicProfile(input: { userId: 2 }) {
//             friendshipStatus
//             username
//             profilePicUrl
//             friendsCount
//             workoutsCount
//             recentWorkouts {
//               workoutStats {
//                 duration
//                 effort
//                 like
//                 trainerRatings
//                 commentsToImprove
//               }
//             }
//           }`;
//   it('when friend', async () => {
//     // create friend entries for both sides of the friendship, for users 1 and 2
//     await helpers.createFriendship(
//       prismaContext.prisma,
//       'consumer1@gmail.com',
//       'consumer2@gmail.com'
//     );
//
//     // user 1 queries public profile of user 2
//     const response = await helpers.expectSuccessfulQuery(
//       request,
//       userPublicProfileQuery
//     );
//
//     expect(response.data).toMatchInlineSnapshot(`
//       Object {
//         "userPublicProfile": Object {
//           "friendsCount": 1,
//           "friendshipStatus": "FRIENDS",
//           "profilePicUrl": null,
//           "recentWorkouts": Array [],
//           "username": "consumer2",
//           "workoutsCount": 0,
//         },
//       }
//     `);
//   });
// });
