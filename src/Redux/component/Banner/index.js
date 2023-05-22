import { Container, Row, Col } from "react-bootstrap";
import style from "../../Assets/css/style.module.css";
import Image from "../../Assets/img/img1.png";
import Bakground from "../../page/detail/style.module.css";

const Banner = () => {
  return (
    <div className={Bakground.detail}>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col sm='6'>
            <h1 style={{ marginTop: "100px" }}>Programming Laravel</h1>
            <p>Mentor</p>
            <h4>
              William Hartono <br /> Developer at Widya Edu
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              voluptatem maiores asperiores iste facere perferendis quod
              excepturi at optio qui, doloribus animi eius. Sit, quae minima
              officiis dolor voluptate veritatis!
            </p>
          </Col>
          <Col sm='6'>
            <img src={Image} className={style.image} alt='img' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
