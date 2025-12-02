import "./_collapse.scss";

function Collapse({ isOpen, children }) {
  return (
    <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
      <div className="collapse__content">{children}</div>
    </div>
  );
}

export default Collapse;
