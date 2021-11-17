interface IProps {
  title: string;
  text: string;
  points: string;
  image: string;
  link: string;
  special?: boolean;
}

export default function Project({
  title,
  text,
  points,
  image,
  link,
  special,
}: IProps) {
  let titleStyle = {
    fontSize: "30px",
    textDecoration: "none",
    cursor: "pointer",
    animation: "",
  };

  if (special) {
    titleStyle["animation"] = "color-change 2s infinite";
    title = `★ ${title} ★`;
  }

  return (
    <div>
      <div className="project-card">
        <div className="face face1">
          <div className="content">
            <h2 style={titleStyle}>{title}</h2>
            <br />
            <p>
              Technologies: <strong>{points}</strong>
            </p>
            <p style={{ minHeight: "10vh", alignItems: "center" }}>
              <i>{text}</i>
            </p>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <img
              alt={title + " image"}
              style={{ cursor: "pointer" }}
              src={image}
              className="project-image"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
