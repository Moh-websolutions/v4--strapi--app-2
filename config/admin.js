module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '702b1b9a9a6492f92384a48103181ef8'),
  },
});
