import { NavBar } from "../components/nav-bar";
import { Hero } from "@/components/hero";
import { SunDecor } from "@/components/slogan";
import { GridLayout } from "../components/grid-layout";
import { Footer } from "../components/footer";
import UpcomingEvent from "@/components/events";
import AboutUs from "@/components/aboutUs";
import OurVision from "@/components/Vision";
import OurStory from "@/components/Story";

export default function Page() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <div className="relative">
        <SunDecor />
        <GridLayout />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16 py-8">
        <UpcomingEvent />
        <AboutUs />
        <OurVision />
        <OurStory />
        </div>
      </div>
      <Footer />
    </div>
  );
}
