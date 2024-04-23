import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

import { HomeSection } from "@/components/Sections/Home";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" /> */}
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
      <Footer />
    </main>
  );
}
