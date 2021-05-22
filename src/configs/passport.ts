import passport from "passport";
import { OAuth2Strategy } from "passport-google-oauth";
import { UserModel } from "../models/UserModel/UserModel";
import { IMongoDBUser } from "./IMongoDBUser";
const GoogleStrategy = OAuth2Strategy;

passport.serializeUser((user: any, done: any) => {
  return done(null, user._id);
});

passport.deserializeUser((id: string, done: any) => {
  UserModel.findById(id, (err: Error, doc: IMongoDBUser) => {
    // Whatever we return goes to the client and binds to the req.user property
    return done(null, doc);
  });
});

// GOOGLE AUTH
passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`,
    },
    function (_: any, __: any, profile: any, cb: any) {
      UserModel.findOne(
        { googleId: profile.id },
        async (err: Error, doc: IMongoDBUser) => {
          if (err) {
            return cb(err, null);
          }

          if (!doc) {
            const newUser = new UserModel({
              googleId: profile.id,
              avatar: profile.photos[0].value ?? "",
              username: profile.displayName,
              password: "",
              email: profile.email,
              isPremium: false,
              currency: "",
              accounts: [],
              categories: [],
              transactions: [],
            });

            await newUser.save();
            cb(null, newUser);
          }
          cb(null, doc);
        }
      );
    }
  )
);
