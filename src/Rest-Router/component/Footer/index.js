import { Col, Row, Container } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
        <Row>
          <Col sm='6'>
            <p>
              TAGLINE edspert disini <br /> JL. Watugede no.58, Wonorejo,
              Sariharjo, Kec.
              <br />
              Ngaglik, Kabupaten Sleman, Daerah Istimewa
              <br /> Yogyakarta 55581
            </p>
          </Col>
          <Col sm='2'>
            <p>
              <b>Progam</b>
            </p>
            <p>Online Course</p>
            <p>Mini Bootcam</p>
            <p>Bootcam</p>
          </Col>
          <Col sm='2'>
            <p>
              <b>Bidang Ilmu</b>
            </p>
            <p>Digital Marketing</p>
            <p>Product Management</p>
            <p>English</p>
            <p>Progamming</p>
          </Col>
          <Col sm='2'>
            <p>
              <b>Tentang Edspert</b>
            </p>
            <p>bantuan</p>
            <p>Kontak Kami</p>
            <p>Media Sosial</p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container style={{ marginTop: "20px", marginBottom: "50px" }}>
        <Row>
          <Col sm='6'></Col>
          <Col sm='6'>
            <p>
              Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
