import "./Hero.scss";

function Hero({ src, srcSet, width, height, alt, title, subtitles, text }) {
  return (
    <div className="hero">
      <img
        className="hero__image"
        src={src}
        srcSet={srcSet}
        sizes="100vw"
        width={width}
        height={height}
        alt={alt}
      />
      <section className="hero__content">
        <h2 className="sr-only">{title}</h2>
        {subtitles.map((sub, index) => (
          <p key={index} className="hero__subtitle">
            {sub}
          </p>
        ))}
        <p className="hero__text">{text}</p>
      </section>
    </div>
  );
}
export default Hero;
