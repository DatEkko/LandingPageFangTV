import LivePageComponent from "@/components/lives/LivePageComponent";
import { fetchLivePageMetadata } from "./metadata";
import HeropageComponent from "@/components/homepage/heropage/HeropageComponent";
import OverviewSection from "@/components/homepage/overviewSection/OverviewSection";

export async function generateMetadata() {
    return await fetchLivePageMetadata();
}

const LivePage = () => {
    return (
        <div className="live-page-containner">
            <HeropageComponent />
            <OverviewSection />
            {/* <LivePageComponent /> */}
        </div>
    )
}

export default LivePage;