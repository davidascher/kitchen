module.exports = {
  db: process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost/kitchen',

  github: {
    // clientID: 'a78350cbc8e679e9c291',
    // clientSecret: '81a4e74890d4b68f9ac70885f3ce5613cf7ef8f5',
    clientID: '542b0ba05f2226c15ba4',
    clientSecret: 'f72d61e610c0d28ece706262aa7f548e9e8a7e5c',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },
};
