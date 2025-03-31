import "./HeaderComponent.scss";
import logoImg from "./../../assets/logo.svg";

const HeaderComponent = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img className="header-logo" src={logoImg.src} alt="" />
                <span>FangTV</span>
            </div>
        </div>
    )
}

export default HeaderComponent;