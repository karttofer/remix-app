// Dependencies
import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";

// Components
import Navbar from "./globals/components/Navbar";

// Style
import stylesheet from "./app.css";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function Root() {
  const PORT = 3000;

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
