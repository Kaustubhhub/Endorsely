import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Hero />
      <VideoSection />
      <div className="pt-20"> 
        <Testimonials />
      </div>
    </div>
  );
}
