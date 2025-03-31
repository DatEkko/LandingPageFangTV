import "./NotFoundComponent.scss";
import NotFound from "./../../assets/404.png";

const NotFoundComponent = () => {
    return (
        <div className="not-found-container">
            <img src={NotFound.src} />
        </div>
    )
}

export default NotFoundComponent;