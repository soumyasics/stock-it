import { FaRegClock } from "react-icons/fa";
import styles from "./homeInfo.module.css";
import { Container } from "react-bootstrap";
import InfoBox from "./infoBox";
import { CiClock2 } from "react-icons/ci";

const HomeInfo = () => {
  return (
    <Container fluid className={` ${styles.homeInfoContainer} pt-5`}>
      <Container className={`d-flex w-100 justify-content-between gap-5`}>
        <InfoBox
        icon={CiClock2}
          heading="Real Time Quotes"
          content="See the latest price changes in the markets and your investments with the power of websockets."
        />
        <InfoBox
          heading="Industry Titans"
          content="Choose from a collection of some of the biggest names in the industry"
        />
        <InfoBox
          heading="Performance Insights"
          content="See how your portfolio is performing in real time with both numerical and visual feedback."
        />
      </Container>
    </Container>
  );
};

export default HomeInfo;
