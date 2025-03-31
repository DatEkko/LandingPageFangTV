import "./OverviewSection.scss";
import CardLeftImg from "./../../../assets/card-left.png";
import CardCenterImg from "./../../../assets/card-center.png";
import CardRightImg from "./../../../assets/card-right.png";

const OverviewSection = () => {
    return (
        <div className="overviewSection-container">
            <div className="background">
                <div className="title">
                    <div className="main-title">
                        FangTV luôn bên bạn
                    </div>
                    <div className="sub-title">
                        <span>Đang vi vu bên ngoài hay thư giãn trên ghế lười?</span>
                        <span className="span">Mang FangTV theo, trò chuyện mọi lúc, vui cùng bạn bè hoặc đơn giản là xem có gì hay!</span>
                    </div>
                </div>

                <div className="card-group">
                    <div className="card card-left">
                        <div className="image">
                            <img src={CardLeftImg.src} alt="Giải trí mọi lúc mọi nơi" />
                        </div>

                        <div className="content">
                            <div className="main-content">
                                Giải trí chất ngất,<br></br>
                                mọi lúc mọi nơi
                            </div>
                            <div className="sub-content">
                                Toàn content xịn, còn tải về được <br></br>
                                để xem offline nữa!
                            </div>
                        </div>
                    </div>

                    <div className="card card-center">
                        <div className="image">
                            <img src={CardCenterImg.src} alt="Livestream cực mượt, thu hút người xem" />
                        </div>

                        <div className="content">
                            <div className="main-content">
                                Stream cực mượt,<br></br>
                                quẩy cực căng
                            </div>
                            <div className="sub-content">
                                Chia sẻ khoảnh khắc đỉnh của bạn, bất cứ <br></br>
                                lúc nào, ở bất cứ đâu luôn
                            </div>
                        </div>
                    </div>

                    <div className="card card-right">
                        <div className="image">
                            <img src={CardRightImg.src} alt="Kết nối đam mê, chia sẽ niềm vui" />
                        </div>

                        <div className="content">
                            <div className="main-content">
                                Kết nối đam mê,<br></br>
                                vui bất tận
                            </div>
                            <div className="sub-content">
                                Thả lửa, comment rần rần, chia sẻ content <br></br>
                                yêu thích với hội bạn thân
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OverviewSection;