import type { FC } from "react";

const NavLink: FC = ({ children, url, className }) => (
  <a
    className={`mr-6 py-2 underline-offset-8 inline-block ${className} hover:underline hover:decoration-2`}
    href={url}
  >
    {children}
  </a>
);

export default NavLink;
