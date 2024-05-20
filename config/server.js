require('dotenv').config();

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5000),
  app: {
    keys: ['+5JAa3CtkmR2e8NsmOtaoA==','gUEm7m0QWRJDqkYuNc6qbw==','Vvc85RMvjTdqT2ZDdu81Rw==','Ovat915qHHTREMuEf6EpEQ==']
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
