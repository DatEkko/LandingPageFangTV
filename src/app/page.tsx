import HeropageComponent from "@/components/homepage/heropage/HeropageComponent";
import OverviewSection from "@/components/homepage/overviewSection/OverviewSection";
import { defaultMetadata } from "./metadata";

export const metadata = defaultMetadata;

const Home = () => {
  return (
    <div className="homepage">
      <HeropageComponent />
      <OverviewSection />
    </div>
  );
}

export default Home;
