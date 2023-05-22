import { Breadcrumb } from "react-bootstrap";

const Bread = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
        CheckOut
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Intruksi Bayar</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Bread;
