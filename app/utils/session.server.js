// Dependencies
import { createCookieSessionStorage } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["this_should_be_a_hash"],
    secure: process.env.NODE_ENV === "development",
    maxAge: 60,
  },
});

export { sessionStorage };
