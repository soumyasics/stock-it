import { Container } from "react-bootstrap";
import navStyle from "./userNavbar.module.css";
const UserNavbar = () => {
  return (
    <Container
      className={`${navStyle.navContainer} center d-flex align-items-center px-5`}
      fluid
    >
      <h3 className="m-0 me-5"> Trade Hub</h3>
      <ul className="list-unstyled m-0 d-flex cursor-pointer d-flex align-items-center justify-content-between">
        <li>Home</li>
        <li>Guide</li>
        <li>Markets</li>
      </ul>

      <div className={`${navStyle.navRegisterContainer} ms-auto`}>
        <button className="w-100 border-0 btn">Login/Register</button>
      </div>
    </Container>
  );
};
export default UserNavbar;
