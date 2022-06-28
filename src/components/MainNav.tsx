import NavLink from "@components/NavLink";

const MainNav = ({ current }) => {
  const getActiveStateByCurrentUrl = (url) => {
    return current === url ? "active-page" : "";
  };

  return (
    <section className="flex flex-grow flex-row justify-between py-4">
      <nav className="text-2xl flex-1">
        <NavLink
          className={`text-red-500 ${getActiveStateByCurrentUrl("/")}`}
          url="/"
        >
          about
        </NavLink>
        <NavLink
          className={`text-orange-500 ${getActiveStateByCurrentUrl("/posts")}`}
          url="/posts"
        >
          blog
        </NavLink>
        <NavLink className="text-yellow-400" url="/resume.pdf">
          resume
        </NavLink>
      </nav>
      <nav className="socials py-2 text-3xl">
        <a className="text-green-500" href={import.meta.env.GITHUB_URL ?? "#"}>
          <i className="fa-brands fa-github-square"></i>{" "}
        </a>
        <a className="text-blue-500" href={import.meta.env.LINKEDIN_URL ?? "#"}>
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </nav>
    </section>
  );
};

export default MainNav;
