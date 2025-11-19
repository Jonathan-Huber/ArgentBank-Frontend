import "./_feature.scss";

function Feature({ src, srcSet, width, height, alt, title, text }) {
  return (
    <div className="feature">
      <img
        src={src}
        srcSet={srcSet}
        width={width}
        height={height}
        alt={alt}
        className="feature__icon"
      />
      <h3 className="feature__title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Feature;
