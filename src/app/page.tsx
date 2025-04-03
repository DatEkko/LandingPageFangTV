import HeropageComponent from "@/components/homepage/heropage/HeropageComponent";
import OverviewSection from "@/components/homepage/overviewSection/OverviewSection";
import { homepageMetadata } from "./metadata";

export const metadata = homepageMetadata;

const Home = () => {
  return (
    <div className="homepage">
      <HeropageComponent />
      <OverviewSection />
    </div>
  );
}

export default Home;
