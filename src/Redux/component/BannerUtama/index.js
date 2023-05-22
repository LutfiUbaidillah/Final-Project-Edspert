import style from "../../Assets/css/style.module.css";
import Image from "../../Assets/img/img1.png";
import { Container, Row, Col } from "react-bootstrap";

function BannerUtama() {
  return (
    <div style={{ backgroundColor: "#2c3f59", color: "white" }}>
      <Container>
        <Row>
          <Col sm='6'>
            <h1 style={{ marginTop: "100px" }}>
              Jadi expert bersama <br /> edspert.id
            </h1>
            <p>
              Tingkatkan skill dan pengetahuan bersama para mentor
              <br />
              terbaik di bidangnya, untuk siapkan karir impian anda.
            </p>
          </Col>
          <Col sm='6'>
            <img src={Image} className={style.image} alt='img' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BannerUtama;
