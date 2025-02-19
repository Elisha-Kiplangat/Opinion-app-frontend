import Info from "@/components/Info";
import HeroSection from "../components/HeroSection";
import Content from "@/components/Content";
import Categories from "@/components/Categories";
import GetStarted from "@/components/GetStarted";
import PropertySelection from "@/components/PropertySelection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Info />
      <Content />
      <Categories />
      <GetStarted />

      <PropertySelection />
    </>
  );
}
