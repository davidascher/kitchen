module.exports = {
  db: process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost/kitchen',

  github: {
    clientID: 'a78350cbc8e679e9c291',
    clientSecret: '81a4e74890d4b68f9ac70885f3ce5613cf7ef8f5',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },
};
