import VideoPageComponent from "@/components/videos/VideoPageComponent";
import { fetchVideoPageMetadata } from "./metadata";
import HeropageComponent from "@/components/homepage/heropage/HeropageComponent";
import OverviewSection from "@/components/homepage/overviewSection/OverviewSection";

export async function generateMetadata() {
    return await fetchVideoPageMetadata();
}

const VideoPage = () => {
    return (
        <div className="video-page-container">
            <HeropageComponent />
            <OverviewSection />
            {/* <VideoPageComponent /> */}
        </div>
    )
}

export default VideoPage;