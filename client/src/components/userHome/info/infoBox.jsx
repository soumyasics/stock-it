import { FaRegClock } from "react-icons/fa";
import styles from "./homeInfo.module.css";
import { TbBulb } from "react-icons/tb";
import { RiStockFill } from "react-icons/ri";
const InfoBox = ({ heading, content }) => {
  let Icon = FaRegClock;
  if (heading == "Industry Titans") {
    Icon = RiStockFill;
  }else if (heading == "Performance Insights") {
    Icon = TbBulb
  }
  <RiStockFill />;
  return (
    <div className={`${styles.infoBoxContainer} mt-5 p-3 `}>
      <div style={{ fontSize: "20px" }} className="mb-3">
        <Icon />
      </div>
      <h2> {heading}</h2>
      <p> {content} </p>
    </div>
  );
};
export default InfoBox;
