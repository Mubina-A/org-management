// passportConfig.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const staff = require('../models/staff'); 
const getPermission = require("../utils");
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const permission = require('../models/permission'); // Replace with your user model

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

// Configure JWT strategy
passport.use(new JwtStrategy(jwtOptions, async (req, done) => {
    // console.log("req",req)
    try {
        // Find the user based on the JWT payload
        const data = await permission.findOne({roleId: req.roleId});
        // console.log("permission",permission)

        // If data is found, return the data object
        if (data) {
            return done(null, data);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}));

// passport.use(new LocalStrategy(async (username, password, done) => {
//   try {
//     const staff = await staff.findOne({ username });
//     if (!staff) {
//       return done(null, false, { message: 'Incorrect username' });
//     }
//     const isValidPassword = await bcrypt.compare(password, staff.password);
//     if (!isValidPassword) {
//       return done(null, false, { message: 'Incorrect password' });
//     }
//     return done(null, staff);
//   } catch (error) {
//     return done(error);
//   }
// }));
const verifyToken = passport.authenticate('jwt', { session: false });
//.log("verifyToken",verifyToken)
const hasRole = (privilege) => {
    return async (req, res, next) => {
    // console.log("req",req)
        const data = await getPermission(req.user);
     //   console.log("data",data)
        const permissionWithAction = data.find((x) => x.privilegeKey == privilege);
        if (
            !data.length ||
            (permissionWithAction && !permissionWithAction.isPermission)
        ) {
            return res.json({ statusCode: 401, data: null, message: 'User is not authorized' });
        }
        next();
    };
};

module.exports = { verifyToken, hasRole, passport };
