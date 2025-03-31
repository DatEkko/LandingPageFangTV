'use client'
import "./LiveRoomComponent.scss";
import { useParams } from "next/navigation";

const LiveRoomComponent = () => {
    const params = useParams();
    return (

        <div className="live-room-component-container">
            Đây là phòng live số {params.id}
        </div>
    )
}

export default LiveRoomComponent;