import "./FooterComponent.scss";
import logoImg from "./../../assets/logo.svg";
import phone from "./../../assets/Phone.png";
import mail from "./../../assets/mail.png";
import facebook from "./../../assets/facebook.png";
import youtube from "./../../assets/ytb.svg";

const FooterComponent = () => {
    return (
        <div className="footer-container">
            <div className="content-left">
                <div className="logo">
                    <img className="footer-logo" src={logoImg.src} alt="" />
                    <span>FangTV</span>
                </div>
                <div className="download">
                    <div className="footer-qr" />
                </div>
            </div>

            <div className="content-center">
                <div className="contact">
                    <img src={phone.src}></img>
                    19006600
                </div>
                <div className="contact">
                    <img src={mail.src}></img>
                    hotrofptplay@fpt.com.vn</div>
                <div className="social">
                    Theo dõi chúng tôi trên:
                    <div className="icon">
                        <img src={facebook.src}></img>
                        <img src={youtube.src}></img>
                    </div>
                </div>
            </div>

            <div className="content-right">
                <span>
                    Công ty Cổ phần Viễn Thông FPT -
                    Người đại diện: Ông Hoàng Việt Anh.
                    Trụ sở: Tầng 8, tòa nhà FPT Tower,
                    số 10 Phạm Văn Bạch, Cầu Giấy, Hà Nội
                </span>

                <span>
                    Số giấy chứng nhận đăng ký kinh doanh: 0101778163
                    do Sở Kế Hoạch Đầu Tư Thành Phố Hà Nội cấp vào ngày 28/07/2005
                </span>

                <span>
                    Giấy phép Cung cấp Dịch vụ Phát thanh,
                    Truyền hình trên mạng Internet số 568/GP-BTTTT cấp ngày 7/12/2020.
                </span>
            </div>

        </div>
    )
}

export default FooterComponent;