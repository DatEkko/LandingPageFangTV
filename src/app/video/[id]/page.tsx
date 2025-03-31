import VideoComponent from "@/components/videos/each-video/VideoComponent";
import { fetchVideoItemMetadata } from "./metadata";
import HeropageComponent from "@/components/homepage/heropage/HeropageComponent";
import OverviewSection from "@/components/homepage/overviewSection/OverviewSection";

export async function generateMetadata({ params }: { params: { id: string } }) {
    return await fetchVideoItemMetadata(params.id);
}

const VideoItemPage = () => {
    return (
        <div className="live-room-page-container">
            <HeropageComponent />
            <OverviewSection />
            {/* <VideoComponent /> */}
        </div>
    )
}

export default VideoItemPage;