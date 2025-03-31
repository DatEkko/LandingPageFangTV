import "./HeropageComponent.scss";

const HeropageComponent = () => {
    return (
        <div className="heropage-container">
            <div className="content">
                <div className="content-left">
                    <div className="title">
                        <div className="main-title">
                            <h1>Giải trí chất ngất, <br></br>mọi lúc mọi nơi!</h1>
                        </div>
                        <div className="sub-title">
                            Stream cực mượt, quẩy cực căng
                        </div>
                    </div>

                    <div className="download">
                        <div className="heropage-qr" />
                    </div>
                </div>
                <div className="content-right">
                    <div className="img-right" />
                </div>
            </div>
        </div>
    )
}

export default HeropageComponent;