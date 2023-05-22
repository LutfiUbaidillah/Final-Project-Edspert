import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, Button, Navbar } from "react-bootstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../component/Banner";

const DetailPage = () => {
  return (
    <>
      <Banner />
      <div style={{ backgroundColor: "#eff4fa", padding: "50px 0px" }}>
        <Container>
          <Row>
            <Col sm='4'>
              <Card style={{ width: "25rem", border: "0px" }}>
                <Navbar bg='light'>
                  <Container>
                    <Navbar.Brand style={{ marginLeft: "35px" }} href='#home'>
                      Materi
                    </Navbar.Brand>
                  </Container>
                </Navbar>
                <br />
                <Navbar bg=''>
                  <Container>
                    <Navbar.Brand style={{ marginLeft: "35px" }}>
                      Fasilitas
                    </Navbar.Brand>
                  </Container>
                </Navbar>
                <Card.Body style={{ textAlign: "center" }}>
                  <Button variant='warning'>Daftar Kelas</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm='8'>
              <Card
                style={{
                  borderRadius: "20px",
                  border: "0px",
                  borderColor: "#146ebe",
                  paddingLeft: "40px",
                  paddingRight: "25",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <h2
                      style={{
                        color: "#202e41",
                        fontWeight: "bold",
                        paddingTop: "30px",
                        paddingBottom: "15px",
                      }}
                    >
                      Materi
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <h5>
                      <strong>Pengenalan Programming Laravel</strong>
                    </h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <h5>
                      <strong>Materi BootCamp Laravel 2</strong>
                    </h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <h5>
                      <strong>Materi BootCamp Laravel 3</strong>
                    </h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <h5>
                      <strong>Materi BootCamp Laravel 4</strong>
                    </h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <h5>
                      <strong>Materi BootCamp Laravel 5</strong>
                    </h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <h5>
                      <strong>Materi BootCamp Laravel 6</strong>
                    </h5>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  borderRadius: "20px",
                  border: "0px",
                  borderColor: "#146ebe",
                  paddingLeft: "40px",
                  paddingRight: "25px",
                  marginTop: "25px",
                }}
              >
                <Card.Body>
                  <Card.Title>
                    <h2
                      style={{
                        color: "#202e41",
                        fontWeight: "bold",
                        paddingTop: "30px",
                        paddingBottom: "15px",
                      }}
                    >
                      Fasilitas
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <h5>
                      <FontAwesomeIcon icon={faStar} />
                      <strong> E-Sertifikat</strong>
                    </h5>
                    <h5>
                      <FontAwesomeIcon icon={faStar} />
                      <strong> Portofolio</strong>
                    </h5>
                    <h5>
                      <FontAwesomeIcon icon={faStar} />
                      <strong> Job Connector</strong>
                    </h5>
                    <h5>
                      <FontAwesomeIcon icon={faStar} />
                      <strong> Career Development</strong>
                    </h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DetailPage;
