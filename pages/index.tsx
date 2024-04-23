import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

import { HomeSection } from "@/components/Sections/Home";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          @devlloni | on development
        </title>
      </Head>
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
