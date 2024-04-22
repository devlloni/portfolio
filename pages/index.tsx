import Image from "next/image";
import { Inter } from "next/font/google";

import { HomeSection } from "@/components/Sections/Home";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main

    >
      <Navbar />
      <div
        className={`min-h-screen ${inter.className}`}
      >
        <HomeSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
