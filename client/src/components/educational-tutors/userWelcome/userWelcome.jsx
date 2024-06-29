import "./userWelcome.css"
import img1 from '../../../assets/images/image 60.png'
export const UserWelcome = () => {
    return (
        <div>
            <div class=" text-center">

                <div class="row user-welcome-body">
                    <div class="col-4 user-welcome-left-box">
                        <img src={img1} alt="" />
                    </div>
                    <div class="col-8 user-welcome-right-box">
                        <div className="user-welcome-inner-box">
                            <h3>Welcome to Stock It :</h3>
                            <p>
                                Welcome to the stock market! It's a dynamic marketplace
                                where shares of publicly traded companies are bought and
                                sold. As an investor, you have the opportunity to own a
                                piece of these companies and   potentially grow your wealth
                                over time. To get started, you'll need to understand basic
                                concepts like stocks, stock exchanges, and brokers. It's
                                important to set your investment goals, educate yourself,
                                and choose a reliable brokerage. Start by investing in a diversified
                                portfolio and stay informed about marke trends.  With patience and discipline,
                                you can navigate the stock market successfully.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};