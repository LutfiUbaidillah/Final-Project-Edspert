import { useEffect } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BannerUtama from "../../component/BannerUtama";
import { getAll } from "../../store/product/action/";
import { useDispatch, useSelector } from "react-redux";
import Image from '../../Assets/img/img2.png';
import list from '../../Assets/css/style.module.css';
import style from '../product/style.module.css';

const ProductPage = () => {
  const { entities } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchProducts = async () => {
    dispatch(getAll());
  };

  const goToDetail = (prodId) => {
    navigate(`/detail/${prodId}`);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ backgroundColor: "#eff4fa" }}>
      <BannerUtama />
      {/* <Container
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          padding: "50px 0px",
          justifyContent: "center",
        }}
      >
        {entities.map((product) => {
          return (
            <Card
              key={product.id}
              onClick={() => goToDetail(product.id)}
              style={{ width: "18rem", cursor: "pointer" }}
            >
              <Card.Img variant='top' src={product.image} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>$ {product.price}</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container> */}

      
      <Container
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          padding: "50px 0px",
          justifyContent: "center",
        }}
      >
        {entities.map((product) => {
          return (
            <Card
              key={product.id}
              onClick={() => goToDetail(product.id)}
              style={{ width: "18rem", cursor: "pointer" }}
            >
            <Row className={style.card}>
                <Col sm="4">
                    <img src={Image} className={list.image} alt="img" />  
                </Col>
                <Col sm="8" style={{textAlign:'left'}}>
                    <p style={{color:'#e9bd2c', fontSize:'14px', fontWeight:'700'}}>Intensive Bootcamp</p>
                    {/* <p>Nilai Count ={props.nilai}</p> */}
                    <p style={{fontSize:'14px', fontWeight:'700'}}>Progamming Laravel</p>
                    <p style={{fontSize:'10px', marginTop:'-15px'}}>(Getting Started with Laravel 9)</p>
                </Col>
            </Row>
              <Card.Body>
                    <p style={{fontSize:'16px', fontWeight:'700', marginTop:'-10px', color:'black'}}>Progamming Laravel</p>
                    <p style={{fontSize:'12px', fontWeight:'700', marginTop:'-15px', color:'black'}}>Getting Started with Laravel 9</p>
                    <hr/>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>$ {product.price}</Card.Text>
                {/* <Button variant='primary'>Go somewhere</Button> */}
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default ProductPage;
