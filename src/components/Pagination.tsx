const Pagination = ({ prev, next }) => (
  <nav className="flex justify-between">
    <span>
      <a className="" href={prev || "#"}>
        prev
      </a>
    </span>
    <span>
      <a className="" href={next || "#"}>
        next
      </a>
    </span>
  </nav>
);

export default Pagination;
