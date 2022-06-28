import type { FC } from "react";
import Footer from "@components/Footer";

const DefaultLayout: FC = ({
  children,
  navigation,
  tagPrefix = "",
  wide = false,
}) => {
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
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link href="/styles/prism-theme.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" />
        <script defer src="/js/brands.min.js"></script>
        <script defer src="/js/fontawesome.min.js"></script>
      </head>

      <body
        className={`flex flex-col md:min-h-fit ${
          wide ? "md:max-w-4xl" : "md:max-w-3xl"
        } w-full bg-slate-900 text-slate-400 px-10`}
      >
        <nav className="my-4 text-2xl">{navigation}</nav>

        <article className="flex-grow">{children}</article>

        <Footer />
      </body>
    </html>
  );
};

export default DefaultLayout;
