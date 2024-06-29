import './userNavbar.css'
import img1 from '../../../assets/images/Frame 339.png'
import img2 from '../../../assets/images/navbarLogo.svg'
export const UserNavbar = () => {
    return (
        <div>
            <nav class="navbar commonNavbar">
                <div class="container">
                    <a class="navbar-brand commonNavbar-image" href="#">
                        <img src={img1} />
                    </a>
                    <div className='commonNavbar-right'>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Companies</a>
                        <a href="#">stocks</a>
                        <a href="#">Article</a>
                        <a href="#">Reviews</a>
                        <a href="#">Complaints</a>

                        <img src={img2} alt="" />


                    </div>
                </div>
            </nav>
        </div>
    )
}