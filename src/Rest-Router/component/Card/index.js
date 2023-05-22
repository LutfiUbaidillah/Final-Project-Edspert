import { Col, Row, Container } from "react-bootstrap";
import Button from "../../Component/Button";
import Image from "../../Assets/img/img2.png";

import style from "./style.module.css";
import list from "../../Assets/css/style.module.css";

const Card = (props) => {
  function handleClick(text) {
    alert(text);
  }

  return (
    <div>
      <Container>
        <Row className={style.card}>
          <Col sm='4'>
            <img src={Image} className={list.image} alt='img' />
          </Col>
          <Col sm='8' style={{ textAlign: "left" }}>
            <p
              style={{ color: "#e9bd2c", fontSize: "14px", fontWeight: "700" }}
            >
              Intensive Bootcamp
            </p>
            {/* <p>Nilai Count ={props.nilai}</p> */}
            <p style={{ fontSize: "14px", fontWeight: "700" }}>
              Progamming Laravel
            </p>
            <p style={{ fontSize: "10px", marginTop: "-15px" }}>
              (Getting Started with Laravel 9)
            </p>
          </Col>
        </Row>
        <hr />
        <Row className={style.Line}>
          <p style={{ fontSize: "14px", fontWeight: "700", color: "black" }}>
            Progamming Laravel
          </p>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "700",
              marginTop: "-15px",
              color: "black",
            }}
          >
            Getting Started with Laravel 9
          </p>
          <Row>
            <Col sm='3'>
              <p style={{ fontSize: "10px", color: "black" }}>Batch</p>
            </Col>
            <Col sm='9'>
              <p
                style={{ fontSize: "10px", color: "black", fontWeight: "700" }}
              >
                September 2022
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm='3'>
              <p
                style={{ fontSize: "10px", color: "black", marginTop: "-10px" }}
              >
                Mentor
              </p>
            </Col>
            <Col sm='9'>
              <p
                style={{
                  fontSize: "10px",
                  color: "black",
                  fontWeight: "700",
                  marginTop: "-10px",
                }}
              >
                William hartono, Farel Prayoga
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm='8'>
              <p
                style={{
                  fontSize: "12px",
                  color: "black",
                  textDecoration: "line-through",
                  float: "right",
                }}
              >
                Rp.2.060.000
              </p>
            </Col>
            <Col sm='4'>
              <p
                style={{
                  fontSize: "16px",
                  color: "#4adca3",
                  float: "right",
                  fontWeight: 700,
                }}
              >
                Rp.560.000
              </p>
            </Col>
          </Row>
          {/* <Button title={props.titled} handleClick={handleClick}/> */}
          {/* <Button title={[props.titled, props.colord, props.stockd]} handleClick={handleClick}/> */}
        </Row>
      </Container>
    </div>
  );
};

export default Card;
