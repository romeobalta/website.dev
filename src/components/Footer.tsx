const Footer = () => (
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
      <a href={import.meta.env.GITHUB_URL ?? "#"}>
        <i className="fa-brands fa-github-square"></i>{" "}
      </a>
      <a href={import.meta.env.LINKEDIN_URL ?? "#"}>
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </nav>
  </footer>
);

export default Footer;
