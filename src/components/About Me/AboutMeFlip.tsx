interface IProps {
  title: string;
  subtitle: string;
  text: string;
  image: string;
  link: string;
  linkLabel: string;
  smallImage?: boolean;
}

export default function FlipCard({
  title,
  text,
  subtitle,
  image,
  link,
  linkLabel,
  smallImage,
}: IProps) {
  let width = "100%";
  let height = "100%";
  let margin = "0px";

  if (smallImage) {
    width = "60%";
    height = "60%";
    margin = "20%";
  }
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <p>{text}</p>
          <a
            className="flip-link"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {linkLabel}
          </a>
        </div>
        <div className="flip-card-back">
          <img
            src={image}
            alt={title}
            width={width}
            height={height}
            style={{ marginTop: `${margin}` }}
          />
        </div>
      </div>
    </div>
  );
}
