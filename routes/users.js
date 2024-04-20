const express = require("express");
const loginSchema = require("../validation/user/loginSchema");
const signupSchema = require("../validation/user/signupSchema");

const router = express?.Router();

router?.post("/login", (req, res) => {
  const { username, password } = req?.body;

  try {
    const valRes = loginSchema.validate(req?.body);

    if (valRes?.error)
      return res.status(400).json({
        status: 400,
        message: null,
        error: valRes?.error?.details[0]?.message,
        user: null,
      });

    const user = users?.find(
      (user) => user?.username === username && user?.password === password
    );

    if (user) {
      return res.status(200).json({
        status: 200,
        message: "Signed in successfully",
        error: null,
        user: {
          jwt: "Random JWT",
          ...user,
        },
      });
    }

    return res.status(404).json({
      status: 404,
      message: null,
      error: "User with given username or password",
      user: null,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: null,
      error: "Internal server error",
      user: null,
    });
  }
});

router?.post("/sign-up", (req, res) => {
  const { username, first_name, last_name, password } = req.body;

  try {
    const valRes = signupSchema.validate(req?.body);

    if (valRes?.error)
      return res.status(400).json({
        status: 400,
        message: null,
        error: valRes?.error?.details[0]?.message,
        user: null,
      });

    const sameUsername = users?.find((user) => user?.username === username);

    if (sameUsername)
      return res.status(409).json({
        status: 409,
        message: null,
        error: "User already exists",
        user: null,
      });

    return res.status(200).json({
      status: 200,
      message: "Signed up successfully",
      error: null,
      user: {
        jwt: "Random JWT",
        username,
        first_name,
        last_name,
        password,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: null,
      error: "Internal server error",
      user: null,
    });
  }
});

module.exports = router;

const users = [
  {
    first_name: "Thomas",
    last_name: "Martin",
    password: "`m9pfR.M@kTd",
    username: "thomas.martin24",
  },
  {
    first_name: "Thomas",
    last_name: "Thompson",
    password: "Y*`Qz:P;>$?)",
    username: "thomas_thompson5",
  },
  {
    first_name: "Thomas",
    last_name: "Miller",
    password: '`X._Y"/u)!2u',
    username: "thomas.miller67",
  },
  {
    first_name: "Jessica",
    last_name: "Hernandez",
    password: "|^{.owHoY=|[",
    username: "jessica-hernandez57",
  },
  {
    first_name: "Patricia",
    last_name: "Davis",
    password: "{~:e:)wHN04p",
    username: "patricia-davis36",
  },
  {
    first_name: "Karen",
    last_name: "Jackson",
    password: "UGmQcI>oLJMP",
    username: "karen.jackson34",
  },
  {
    first_name: "Susan",
    last_name: "Martinez",
    password: 'YB@aZsC"[S[g',
    username: "susan_martinez38",
  },
  {
    first_name: "Joseph",
    last_name: "Brown",
    password: "9X_!J5m1}xX4",
    username: "joseph.brown19",
  },
  {
    first_name: "Elizabeth",
    last_name: "Rodriguez",
    password: "u`XFvR:5Su[w",
    username: "elizabeth.rodriguez8",
  },
  {
    first_name: "Jessica",
    last_name: "Miller",
    password: "b_?iAUT$s-A]",
    username: "jessica_miller87",
  },
  {
    first_name: "Elizabeth",
    last_name: "Johnson",
    password: 'Z\\29~Mv":v@e',
    username: "elizabeth.johnson39",
  },
  {
    first_name: "Richard",
    last_name: "Thomas",
    password: "sub^.T,!M%U%",
    username: "richard_thomas71",
  },
  {
    first_name: "Richard",
    last_name: "Davis",
    password: "M^;vinL/Y~u@",
    username: "richard.davis89",
  },
  {
    first_name: "Elizabeth",
    last_name: "Smith",
    password: "q'@xv1GPVixJ",
    username: "elizabeth-smith51",
  },
  {
    first_name: "Thomas",
    last_name: "Hernandez",
    password: ')gr/lp=8p"__',
    username: "thomas_hernandez46",
  },
  {
    first_name: "Patricia",
    last_name: "Smith",
    password: "Bj/[u3`2gaP'",
    username: "patricia-smith42",
  },
  {
    first_name: "Susan",
    last_name: "Wilson",
    password: "xEGe|3X_N?\\F",
    username: "susan_wilson70",
  },
  {
    first_name: "Thomas",
    last_name: "Thompson",
    password: "f@Gi6fzBc:<@",
    username: "thomas.thompson34",
  },
  {
    first_name: "Susan",
    last_name: "Smith",
    password: "L!.60EEE>L>4",
    username: "susan_smith26",
  },
  {
    first_name: "William",
    last_name: "White",
    password: "M'~0=v?yo{|0",
    username: "william-white96",
  },
];
