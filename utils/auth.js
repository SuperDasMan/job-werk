const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    console.log('with auth');
  } else {
    next();
  }
};

module.exports = withAuth;
