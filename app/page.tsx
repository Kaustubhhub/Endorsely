import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#151719] h-screen w-full">
      <Navbar />
      <Hero/>
    </div>
  );
}
