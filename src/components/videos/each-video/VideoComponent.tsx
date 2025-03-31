'use client'
import './VideoComponent.scss';
import { useParams } from "next/navigation";

const VideoComponent = () => {
    const params = useParams();
    return (
        <div className='video-component-container'>
            Đây là video số {params.id}
        </div>
    )
}

export default VideoComponent;