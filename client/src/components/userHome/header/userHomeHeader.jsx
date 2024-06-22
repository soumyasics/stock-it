import { Col, Container, Row, Button } from "react-bootstrap";
import style from "./userHomeHeader.module.css";
import headerImg from "../../../assets/images/header-img.svg";
const UserHomeHeader = () => {
  return (
    <Container className={`px-5 ${style.headerContainer}`} fluid>
      <Row className="d-flex justify-content-between">
        <Col xs={5} className="d-flex flex-column justify-content-center">
          <h1> TRADE HUB </h1>
          <p className={style.headerContent}>
            Welcome to Stock It: Your Gateway to Informed Investing and
            Empowered Trading. Explore real-time stock prices, dynamic trading
            activities, and comprehensive portfolio management tools.
            <br />
            <br />
            Join us in revolutionizing the stock trading experience – where
            informed decisions meet seamless transactions
          </p>
          <Row className="w-75">
            
            <Col>
              <Button> Browse Markets </Button>
            </Col>
            <Col>
              <Button>Get Started </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={5}>
          <img src={headerImg} alt="header" />
        </Col>
      </Row>
    </Container>
  );
};
export default UserHomeHeader;
