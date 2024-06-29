import './userHomegif.css'
import gif1 from "../../../assets/images/userHomeGif.gif"
export const UserHomeGif = () =>
    {
        return(
            <div className="userHomeGif-body">
                <h5>What India feels about Grow!!</h5>
                <img src={gif1} alt="" />
            </div>
        )
    }