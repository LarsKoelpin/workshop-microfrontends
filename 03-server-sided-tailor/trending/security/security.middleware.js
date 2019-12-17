const AUTH_SERVER = process.env.AUTH_SERVER || "localhost:4003";
const DISABLE_SECURITY = process.env.DISABLE_SECURITY || false;

module.exports = (req, res, next) => {
  if (DISABLE_SECURITY === 'true') {
    return next();
  }
  if (!req.cookies["auth"]) {
    res.status(301).redirect(`http://${AUTH_SERVER}`);
  } else {
    next();
  }
};