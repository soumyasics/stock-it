import CommonNavbar from "../../common/commonNavbar";
import { Footer2 } from "../../common/footer2/footer2";
import './userRegistration.css'
import img1 from '../../../assets/images/shieldLogo.png'


export const UserRegistration = () => {
  return (
    <div>
      <CommonNavbar />
      <div style={{ minHeight: "500px" }}>
        <div className="userRegistration">
          <div className="userRegistration-main">
            <h1>User Registration</h1>
              <div className="userRegistration-logo">
                <img src={img1} alt="logo" />

              </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};
