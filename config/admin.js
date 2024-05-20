module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'kZwexojKKkvkHErw6Gce/g=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'kZwexojKKkvkHErw6Gce/g=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'kZwexojKKkvkHErw6Gce/g==s'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
