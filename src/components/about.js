import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/img1.jpg";

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const Photoshop = 60;
  return (
    <section id="about" className="block about-block">
      <Container>
        <div className="title-holder">
          <h2>ЭМНЕ ҮЧҮН БИЗДЕ ОКУШУҢАР КЕРЕК?</h2>
          <div className="subtitle">Биздин окуучулар</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Забанбап стилде дүйнөлүк класстагы веб-сайттарды түзүү.</p>
            <p>Акыркы технологияны колдонуу.</p>
            <p>OS системалар боюнча көбүрөөк ишенимдүү билим.</p>
            <p>Англис тилин билүү ELEMENTARY же INTERMEDIATE.</p>
            <p>Интелекти өстүрүү</p>
            <div className="progress-block">
              <h4>JavaScript </h4>
              <ProgressBar now={html} label={`${html}`} />
            </div>
            <div className="progress-block">
              <h4>CSS</h4>
              <ProgressBar now={responsive} label={`${responsive}`} />
            </div>
            <div className="progress-block">
              <h4>HTML</h4>
              <ProgressBar now={Photoshop} label={`${Photoshop}`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
