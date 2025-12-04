import "./Button.scss";

function Button({
  children,
  type = "button",
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
