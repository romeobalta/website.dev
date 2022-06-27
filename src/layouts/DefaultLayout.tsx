import type { FC } from "react";
import NavLink from "@components/NavLink";

const DefaultLayout: FC = ({ children, tagPrefix = "" }) => {
  let tag = import.meta.env.SITE_TAG;

  if (tagPrefix) {
    tag = `${tagPrefix} | ${tag}`;
  }

  return (
    <html className="h-full w-full flex justify-center align-middle">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{tag}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="/styles/prism-theme.css" rel="stylesheet" />
      </head>

      <body className="md:min-h-fit md:max-w-2xl w-full bg-slate-900 text-slate-400 px-10">
        <nav className="my-4 text-2xl">
          <NavLink className="text-red-500" url="/">
            about
          </NavLink>
          <NavLink className="text-orange-500" url="/posts">
            blog
          </NavLink>
          <NavLink className="text-yellow-400" url="/resume">
            resume
          </NavLink>
        </nav>

        <article>{children}</article>
      </body>
    </html>
  );
};

export default DefaultLayout;
