import React from 'react';
import Image from 'next/image';

const HomeSection = () => {
    return (
        <div>
            <div className="flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg">
                <div className=" inset-0 overflow-hidden">
                    <div className="jumbo absolute -inset-[10px] opacity-50"></div>
                </div>
                <div className="container px-5 py-10 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                    <Image
                                        className="rounded-full"
                                        src="https://avatars.githubusercontent.com/u/103016609?v=4"
                                        width={200}
                                        height={200}
                                        alt="Lautaro Dellonis picture"
                                    />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-lg">Lautaro Delloni</h2>
                                    <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base text-gray-400">
                                        Desarrollador de software autodidacta Fullstack, apasionado por crear, mejorar y potenciar sistemas.
                                    </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">
                                    Hola! mi nombre es Lautaro, pero puedes llamarme Dello. Soy un desarrollador web fullstack, Argentino. Me apasiona crear aplicaciones web óptimas e innovativas y me esfuerzo constantemente por mejorar mis técnicas y habilidades, manteniendome al día con las últimas tecnologías.
                                </p>
                                <a className="text-purple-400 inline-flex items-center">
                                    Ver más
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mt-4">
                    <button
                        //  onClick={toggleTheme}
                        className="px-3 py-1 border border-stone-200 rounded-full drop-shadow-sm text-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/40 backdrop-blur-lg hover:border-stone-300 transition-colors dark:border-stone-500 dark:hover:border-stone-400"
                    >
                        Ver mis proyectos
                    </button>
                </div>
            </div>
        </div>
    )
}

export {
    HomeSection,
}
