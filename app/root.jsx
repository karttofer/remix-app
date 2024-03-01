// Dependencies
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useNavigate,
  json,
  useLoaderData,
} from "@remix-run/react";

// Components
import Navbar from "./globals/components/Navbar";

// Style
import stylesheet from "./app.css";
import { useEffect } from "react";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export const meta = () => {
  return [
    { title: "Star Wars App" },
    {
      property: "og:title",
      content: "Star Wars App",
    },
    {
      name: "description",
      content:
        "Simple we app application where you can find some characters from Star wars",
    },
  ];
};

export async function loader({ request }) {
  const cookieHeader = request.headers.get("Cookie");
  return json({ PORT: process.env.BASE_URL, cookieHeader });
}

export default function Root() {
  const { PORT, cookieHeader } = useLoaderData();
  const nav = useNavigate();
  useEffect(() => {
    if (!cookieHeader) {
      nav("/login");
    }
  }, [cookieHeader]);
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <LiveReload REMIX_DEV_SERVER_WS_PORT={PORT} />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
