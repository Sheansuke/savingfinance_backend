const jwt = require("jsonwebtoken");

// CHECK IF TOKEN EXIST IN HEADERS, IF EXIST ALLOW ACCESS TO USER
export const isAuthJWT = (req: any, res: any, next: () => void) => {
  const authHeader = req.headers.accesstoken;
  if (authHeader) {
    const token = authHeader;

    jwt.verify(token, `${process.env.JWT_SECRET}`, { ignoreExpiration: false }, (err: any, user: any) => {
      if (err) {
        return res.status(401).json({
          serverInfo: {
            code: 401,
            authorized: false,
            message: "Unauthorized",
          },
        });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401);
  }
};


// CREATE TOKEN
export const createToken = (req: any, res: any, next?: () => void) => {
  if (req.user._id) {
    // Generate an access token
    const accessToken = jwt.sign(
      { userId: req.user._id },
      `${process.env.JWT_SECRET}`,
      {
        expiresIn: "1d",
      }
    );

    res.json(accessToken);
  } else {
    res.json({
      serverInfo: {
        code: 401,
        authorized: false,
        message: "Oh, something is failed, please check your account",
      },
    });
  }
};
