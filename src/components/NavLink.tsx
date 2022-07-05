import type { FC } from "react";

const NavLink: FC = ({ children, url, className, id }) => (
  <a
    className={`mr-6 py-2 underline-offset-8 inline-block ${className} hover:underline hover:decoration-2`}
    href={url}
    id={id}
  >
    {children}
  </a>
);

export default NavLink;
