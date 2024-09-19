import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#151719] h-full w-full">
      <Navbar />
      <Hero/>
      <VideoSection/>
    </div>
  );
}
