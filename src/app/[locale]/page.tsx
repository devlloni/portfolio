import HomeSection from '@/components/home/HomeSection';
import React from 'react';
import Head from 'next/head';

const Home = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <Head>
                <title>Devllo - Portfolio</title>
            </Head>
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
                    <HomeSection />
            </div>
        </section>
    );
}

export default Home;
