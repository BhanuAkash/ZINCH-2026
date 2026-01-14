import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import JourneySection from "../components/JourneySection";
import ProposalSection from "../components/ProposalSection";
import WhyChooseZinch from "../components/WhyChooseZinch";
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <JourneySection />
            <ProposalSection />
            <WhyChooseZinch />
            <Footer />
        </>
    );
}
