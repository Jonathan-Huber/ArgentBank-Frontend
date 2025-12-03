import "./_loading.scss";

function Loading({ size = "normal", className = "" }) {
  return <div className={`loader loader--${size} ${className}`} />;
}

export default Loading;
