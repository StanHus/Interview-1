import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface IProps {
  title: string;
  text: string;
  points: string;
  image: string;
  link: string;
}

const titleStyle = {
  fontSize: "30px",
  color: "#fceadd",
  textDecoration: "none",
  cursor: "pointer",
};

export default function Project({ title, text, points, image, link }: IProps) {
  return (
    <div>
      <Col>
        <Card className="card" text="light" bg="secondary" border="secondary">
          <Card.Body>
            <Card.Title
              style={titleStyle}
              onClick={() => (window.location.href = link)}
            >
              {title}
              {" ->"}
            </Card.Title>
            <Card.Text style={{ fontSize: "15px" }}>
              <i>{text}</i>
            </Card.Text>
            <Card.Text>
              Tools Used: <strong>{points}</strong>
            </Card.Text>
          </Card.Body>
          <Card.Img
            onClick={() => (window.location.href = link)}
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
