import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    color: "#fceadd",
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
      <Col>
        <Card className="card" text="light" bg="secondary" border="secondary">
          <Card.Body>
            <Card.Title style={titleStyle} onClick={() => window.open(link)}>
              {title}
            </Card.Title>
            <Card.Text style={{ fontSize: "15px" }}>
              <i>{text}</i>
            </Card.Text>
            <Card.Text>
              Technologies: <strong>{points}</strong>
            </Card.Text>
          </Card.Body>
          <Card.Img
            onClick={() => window.open(link)}
            className="image"
            variant="bottom"
            src={image}
            style={{ cursor: "pointer" }}
          />
        </Card>
      </Col>
    </div>
  );
}