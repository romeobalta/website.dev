import type { FC } from "react";

const NavLink: FC = ({ children, url, className }) => (
  <a
    className={`mr-6 py-2 hover:underline underline-offset-4 inline-block ${className}`}
    href={url}
  >
    {children}
  </a>
);

export default NavLink;
