import NavLink from "@components/NavLink";

const MainNav = ({ current }) => {
  const getActiveStateByCurrentUrl = (url) => {
    return current === url ? "active-page" : "";
  };

  return (
    <>
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
      <NavLink
        className={`text-yellow-400 ${getActiveStateByCurrentUrl("/resume")}`}
        url="/resume"
      >
        resume
      </NavLink>
    </>
  );
};

export default MainNav;
