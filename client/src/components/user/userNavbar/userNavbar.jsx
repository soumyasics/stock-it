import './userNavbar.css';
import img1 from '../../../assets/images/Frame 339.png';
import img2 from '../../../assets/images/navbarLogo.svg';
import { useNavigate } from 'react-router-dom';

export const UserNavbar = () => {
    const navigate = useNavigate();
    const userLogout = () => {
        navigate('/userLogin');
    };
    const redirectUserHome = () => {
        navigate('/userHome')
    }

    const redirectUserAbout = () => {
        navigate('/userabout')
    }

    const redirectCompanies = () => {
        navigate('/userViewCompany')
    }



    return (
        <div>
            <nav className="navbar commonNavbar">
                <div className="container">
                    <a className="navbar-brand commonNavbar-image" href="#">
                        <img src={img1} alt="Navbar Logo"/>
                    </a>
                    <div className="commonNavbar-right user-navbar d-flex  align-items-center justify-content-between" style={{ width: "500px" }}>
                        <h6 className="text-light fw-bold" onClick={redirectUserHome}>Home</h6>
                        <h6 className="text-light fw-bold" onClick={redirectCompanies}>Companies</h6>
                        <h6 className="text-light fw-bold" onClick={redirectUserAbout}>About</h6>
                        <h6 className="text-danger fw-bold" onClick={userLogout}>Logout</h6>
                    </div>
                </div>
            </nav>
        </div>
    );
};
