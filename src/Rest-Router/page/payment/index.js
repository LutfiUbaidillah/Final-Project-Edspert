import { Container, Row, Button, Card, Col, Tab, Tabs } from "react-bootstrap";
import ImageBudi from "../../Assets/img/fotobudi.png";
import Bank from "../../Assets/img/bank.png";
import Link from "../../component/Breadcrumb";

const Payment = () => {
  return (
    <div style={{ backgroundColor: "#eff4fa", padding: "50px 0px" }}>
      <Container>
        <Link />
        <h3 style={{ paddingBottom: "20px" }}>Instruksi Bayar</h3>
        <Card style={{ borderRadius: "20px" }}>
          <Card.Body>
            <Card.Text>
              <Row>
                <Col sm='6'>
                  <div className=''>
                    <Row
                      style={{
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Col sm='6' style={{ width: "25%" }}>
                        <img
                          src={ImageBudi}
                          alt='img'
                          style={{ width: "100%" }}
                        />
                      </Col>
                      <Col sm='6'>
                        <h5>
                          Programming Laravel Getting Started with Laravel 9
                        </h5>
                        <p>
                          batch: <span>September 02 2023</span>
                        </p>
                        <p>
                          mentor: <span>Ganang Bayu Aji</span>
                        </p>
                      </Col>
                    </Row>

                    <strong>Metode Pembayaran</strong>
                    <p>Bank Transfer (verifikasi manual)-Mandiri</p>
                    <Row
                      style={{
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Col sm='6' style={{ width: "25%" }}>
                        <img src={Bank} alt='img' style={{ width: "100%" }} />
                      </Col>
                      <Col sm='6'>
                        <strong>No Rek. 137000299089</strong>
                        <p>a.n. PT Widya Kreasi Bangsa</p>
                      </Col>
                    </Row>
                    <p>Nominal yang harus dibayar senilai:</p>
                    <strong>Rp. 400.000</strong>
                  </div>
                </Col>
                <Col sm='6'>
                  <Tabs defaultActiveKey='tab1' id='tabbed-component'>
                    <Tab eventKey='tab1' title='ATM'>
                      <ol>
                        <li>Masukkan kartu ke mesing ATM Mandiri.</li>
                        <li>Pilih Bahasa.</li>
                        <li>Masukkan PIN ATM.</li>
                        <li>Pilih menu transaksi lainnya.</li>
                        <li>
                          Pilih menu “Transfer”, lalu pilih ke relk Mandiri.
                        </li>
                        <li>Masukkan no rekening yang dituju.</li>
                        <li>
                          Masukkan nominal jumlah uang yang akan di transfer.
                        </li>
                        <li>
                          Layar ATM akan menampilkan data transaksi anda, jika
                          data sudah benar pilih “YA”.
                        </li>
                        <li>Selesai, struk akan keluar dari mesin ATM.</li>
                      </ol>
                    </Tab>
                    <Tab eventKey='tab2' title='Internet Banking'>
                      <ol>
                        <li>
                          Login ke akun <b>internet banking</b> Anda.
                        </li>
                        <li>
                          Pilih opsi “<b>Transfer</b>”
                        </li>
                        <li>
                          Pilih <b>bank</b> tujuan.
                        </li>
                        <li>
                          Masukkan nomor rekening penerima dan nominal yang akan
                          ditransfer.
                        </li>
                        <li>Isikan pin Anda.</li>
                        <li>
                          Tunggu transaksi diproses. Anda akan mendapat
                          pemberitahuan apakah pengiriman saldo sukses atau
                          tidak.
                        </li>
                      </ol>
                    </Tab>
                    <Tab eventKey='tab3' title='M-BANKING'>
                      <ol>
                        <li>
                          Buka aplikasi <b>m</b>-<b>banking</b> di smartphone.
                        </li>
                        <li>Masukkan username dan password.</li>
                        <li>
                          Pilih menu Transfer &gt; <b>Bank</b> Lain Dalam
                          Negeri.
                        </li>
                        <li>
                          Masukkan Kode <b>Bank</b> dan Nomor Virtual Account
                          tujuan.
                        </li>
                        <li>Masukkan nominal yang harus dibayarkan.</li>
                        <li>Layar akan menunjukkan konfirmasi. ...</li>
                        <li>Masukkan PIN transaksi.</li>
                        <li>Selesai.</li>
                      </ol>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#2B3E58",
              color: "white",
              paddingTop: "75px",
              paddingBottom: "75px",
              borderRadius: "0px 0px 20px 20px",
            }}
          >
            <p>Sudah Transfer? Lakukan verifikasi pembayaran segera!</p>
            <Button
              style={{
                borderRadius: "25px",
                padding: "10px",
              }}
              variant='warning'
            >
              Verifikasi Pembayaran
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Payment;
