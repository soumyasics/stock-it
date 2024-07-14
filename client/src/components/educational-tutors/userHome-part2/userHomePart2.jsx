import "./userHomePart2.css"
import img1 from "../../../assets/images/image 59.png"
export const UserHomePart2 = () => {
    return (
        <div>
            <div className="userHomePart2-body">
                <div className="row">
                    <div className="col-8">
                        <div className="userHomePart2-left-inner-box">
                        <h2>Growth Of Stock It</h2>
                        <p>The stock market is expected to see moderate growth in 2024, influenced by a stable economic
                            environment and declining inflation rates. <br /> <br />

                            While the rapid gains of 2023 may not continue, sectors such as financials, industrials, and healthcare are 
                            anticipated to perform well.</p>
                    </div>
                    </div>
                    <div className="col-4">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
} 