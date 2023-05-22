import {
  Container,
  Row,
  Col,
  Stack,
  Breadcrumb,
  Form,
  Button,
} from "react-bootstrap";
import "../checkout/style.module.css";
import Mandiri from "../../Assets/img/bank.png";
import BCA from "../../Assets/img/BCA.png";
import Img2 from "../../Assets/img/img2.png";

function Checkout() {
  return (
    <div style={{ padding: "30px 0px 100px", backgroundColor: "#eff4fa" }}>
      <Container>
        {/* <p><a href="#" style={{textDecoration:'none', fontWeight:'700',}}>Checkout</a> > Intruksi Bayar</p> */}
        <Breadcrumb>
          <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
          <Breadcrumb.Item href='#'> Checkout</Breadcrumb.Item>
          <Breadcrumb.Item active>Intruksi Bayar</Breadcrumb.Item>
        </Breadcrumb>
        <h3>Checkout</h3>
        <Row style={{ justifyContent: "center", gap: "20px" }}>
          {/* <Stack direction="horizontal" gap={3}> */}
          <Col
            sm='5'
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "20px 40px",
              marginTop: "30px",
            }}
          >
            <h5 style={{ fontWeight: "600", marginTop: "30px" }}>
              Pilih Metode pembayaran
            </h5>
            <h6
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "30px" }}
            >
              Bank Transfer (Verifikasi manual)
            </h6>
            <p style={{ color: "#6D7175" }}>
              pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar
              ini memerlukan verifikasi pembayaran manual melalui Whatsapp
            </p>
            <hr />
            <Stack gap={3}>
              <div
                style={{
                  border: "1px solid #C9CCCF",
                  padding: "15px",
                  borderRadius: "5px",
                }}
              >
                <Row>
                  <Col sm='3'>
                    <img
                      src={Mandiri}
                      alt='mandiri'
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col sm='7'>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Bank Transfer ke Rek Bank Mandiri
                    </span>
                  </Col>
                  <Col sm='2'>
                    <Form style={{ float: "right" }}>
                      {["checkbox"].map((type) => (
                        <div>
                          <Form.Check // prettier-ignore
                            type={type}
                            id={``}
                            label={``}
                          />
                        </div>
                      ))}
                    </Form>
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  border: "1px solid #C9CCCF",
                  padding: "15px",
                  borderRadius: "5px",
                }}
              >
                <Row>
                  <Col sm='3'>
                    <img src={BCA} alt='bca' style={{ width: "80%" }} />
                  </Col>
                  <Col sm='7'>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Bank Transfer ke Rek Bank BCA
                    </span>
                  </Col>
                  <Col sm='2'>
                    <Form style={{ float: "right" }}>
                      {["checkbox"].map((type) => (
                        <div>
                          <Form.Check // prettier-ignore
                            type={type}
                            id={``}
                            label={``}
                          />
                        </div>
                      ))}
                    </Form>
                  </Col>
                </Row>
              </div>
            </Stack>
            <h6
              style={{ fontSize: "14px", fontWeight: "600", marginTop: "30px" }}
            >
              Virtual Account (Verifikasi manual)
            </h6>
            <p style={{ color: "#6D7175" }}>
              pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar
              ini memerlukan verifikasi pembayaran manual melalui Whatsapp
            </p>
            <hr />
            <Stack gap={3}>
              <div
                style={{
                  border: "1px solid #C9CCCF",
                  padding: "15px",
                  borderRadius: "5px",
                }}
              >
                <Row>
                  <Col sm='3'>
                    <img
                      src={Mandiri}
                      alt='mandiri'
                      style={{ width: "100%" }}
                    />
                  </Col>
                  <Col sm='7'>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Bank Transfer ke Rek Bank Mandiri
                    </span>
                  </Col>
                  <Col sm='2'>
                    <Form style={{ float: "right" }}>
                      {["checkbox"].map((type) => (
                        <div>
                          <Form.Check // prettier-ignore
                            type={type}
                            id={``}
                            label={``}
                          />
                        </div>
                      ))}
                    </Form>
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  border: "1px solid #C9CCCF",
                  padding: "15px",
                  borderRadius: "5px",
                }}
              >
                <Row>
                  <Col sm='3'>
                    <img src={BCA} alt='bca' style={{ width: "80%" }} />
                  </Col>
                  <Col sm='7'>
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>
                      Bank Transfer ke Rek Bank BCA
                    </span>
                  </Col>
                  <Col sm='2'>
                    <Form style={{ float: "right" }}>
                      {["checkbox"].map((type) => (
                        <div>
                          <Form.Check // prettier-ignore
                            type={type}
                            id={``}
                            label={``}
                          />
                        </div>
                      ))}
                    </Form>
                  </Col>
                </Row>
              </div>
            </Stack>
          </Col>
          <Col
            sm='6'
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "20px 40px",
              marginTop: "30px",
            }}
          >
            <h5 style={{ fontWeight: "600", marginTop: "30px" }}>
              Ringkasan Pesanan
            </h5>
            <Row>
              <Col sm='3'>
                <img
                  src={Img2}
                  alt='image'
                  style={{
                    width: "100%",
                    backgroundColor: "#2b3e58",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    marginTop: "10px",
                  }}
                />
              </Col>
              <Col sm='9'>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  Progamming Laravel
                </span>
                <br />
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  Getting Started with Laravel 9
                </span>
                <Row style={{ marginTop: "10px" }}>
                  <Col sm='2'>
                    <p style={{ fontSize: "12px", color: "black" }}>Batch</p>
                  </Col>
                  <Col sm='10'>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      September 2022
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col sm='2'>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "black",
                        marginTop: "-10px",
                      }}
                    >
                      Mentor
                    </p>
                  </Col>
                  <Col sm='10'>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "black",
                        fontWeight: "700",
                        marginTop: "-10px",
                      }}
                    >
                      William hartono, Farel Prayoga
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <p style={{ fontWeight: "700", fontSize: "14px" }}>Kode Promo</p>
            <Row>
              <Col sm='10' style={{ marginTop: "-5px" }}>
                <Form>
                  <Form.Group
                    className='mb-3'
                    controlId='exampleForm.ControlInput1'
                  >
                    <Form.Control
                      type='text'
                      placeholder='Masukan Kode Promo'
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col sm='2' style={{ marginTop: "-5px", marginLeft: "-10px" }}>
                <Button style={{ backgroundColor: "#2a61a8" }}>Terapkan</Button>
              </Col>
            </Row>
            <p style={{ fontWeight: "700", fontSize: "14px" }}>
              Metode Pembayaran
            </p>
            <p style={{ fontWeight: "600", fontSize: "14px" }}>
              Bank Transfer (Verifikasi manual)-Mandiri
            </p>
            <p
              style={{ fontWeight: "700", fontSize: "14px", marginTop: "30px" }}
            >
              Ringkasan Pembayaran
            </p>
            <Stack direction='horizontal'>
              <p style={{ fontSize: "14px" }}>Harga Kelas</p>
              <p className='ms-auto' style={{ fontSize: "14px" }}>
                Rp.700.000
              </p>
            </Stack>
            <Stack direction='horizontal'>
              <p style={{ fontSize: "14px" }}>Potongan</p>
              <p className='ms-auto' style={{ fontSize: "14px" }}>
                Rp.200.000
              </p>
            </Stack>
            <Stack direction='horizontal'>
              <p style={{ fontSize: "14px" }}>Promo</p>
              <p className='ms-auto' style={{ fontSize: "14px" }}>
                -
              </p>
            </Stack>
            <Stack direction='horizontal'>
              <p style={{ fontSize: "14px" }}>Kode Unik</p>
              <p className='ms-auto' style={{ fontSize: "14px" }}>
                Rp.100.000
              </p>
            </Stack>
            <hr />
            <Stack direction='horizontal'>
              <p style={{ fontSize: "14px", fontWeight: "700" }}>
                Total Pembayaran
              </p>
              <p className='ms-auto' style={{ fontSize: "14px" }}>
                Rp.400.000
              </p>
            </Stack>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              Dengan menekan Tombol <b>Bayar</b> kamu telah menyetujui syarat
              dan ketentuan yang berlaku, silahkan baca kembali{" "}
              <a href='#' style={{ fontWeight: "700" }}>
                Syarat & ketentuan
              </a>{" "}
              yang berlaku
            </p>

            <Stack
              direction='horizontal'
              style={{ marginTop: "50px", marginBottom: "50px" }}
            >
              <a href='#' style={{ fontWeight: "700" }}>
                Batalkan
              </a>
              <div className='ms-auto'>
                <Button
                  style={{
                    backgroundColor: "#2a61a8",
                    padding: "10px 60px",
                    borderRadius: "30px",
                  }}
                >
                  Bayar
                </Button>
              </div>
            </Stack>
          </Col>
          {/* </Stack> */}
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
