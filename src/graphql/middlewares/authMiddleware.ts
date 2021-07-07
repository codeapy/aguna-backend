/* eslint-disable no-unused-vars */
import Keycloak from 'keycloak-backend';
import fs from 'fs';
import path from 'path';

const keycloak = Keycloak({
  realm: process.env.KEYCLOAK_REALM,
  'auth-server-url': process.env.KEYCLOAK_AUTH_SERVER_URL,
  client_id: process.env.KEYCLOAK_CLIENT_ID,
  client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
  username: process.env.KEYCLOAK_USERNAME,
  password: process.env.KEYCLOAK_PASSWORD,
});

const cert = fs.readFileSync(path.join(__dirname, 'public_cert.pem'));

export default async (resolve, root, args, context, info) => {
  const [type, accessToken] = (
    context?.request?.header?.authorization ?? ''
  ).split(' ');

  try {
    const token = await keycloak.jwt.verifyOffline(accessToken, cert);
    context.user = token?.content;
  } catch (error) {
    console.error(error);
  }

  const result = await resolve(root, args, context, info);

  return result;
};
