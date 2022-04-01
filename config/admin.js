module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '85553ba339dc6a54de835a71231bc2f4'),
  },
});
