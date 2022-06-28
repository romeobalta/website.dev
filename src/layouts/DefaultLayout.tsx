import type { FC } from "react";
import NavLink from "@components/NavLink";

const DefaultLayout: FC = ({ children, tagPrefix = "", wide = false }) => {
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
        <script defer src="/js/brands.min.js"></script>
        <script defer src="/js/fontawesome.min.js"></script>
      </head>

      <body
        className={`flex flex-col md:min-h-fit ${
          wide ? "md:max-w-4xl" : "md:max-w-2xl"
        } w-full bg-slate-900 text-slate-400 px-10`}
      >
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

        <article className="flex-grow">{children}</article>

        <footer className="flex justify-between">
          <nav className="py-5 text-xs">
            hacked together by{" "}
            <a href="https://github.com/romeobalta/website">romeo</a> using{" "}
            <a href="https://astro.build/">astro</a>,{" "}
            <a href="https://reactjs.org/">react</a>,{" "}
            <a href="https://tailwindui.com/">tailwind</a> and{" "}
            <a href="https://netlify.com/">netlify</a>
          </nav>
          <nav className="socials py-2 text-3xl">
            <a href={import.meta.env.GITHUB_URL}>
              <i class="fa-brands fa-github-square"></i>{" "}
            </a>
            <a href={import.meta.env.LINKEDIN_URL}>
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </nav>
        </footer>
      </body>
    </html>
  );
};

export default DefaultLayout;
