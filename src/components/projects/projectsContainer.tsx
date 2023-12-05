import React from 'react';
import ProjectCard from './projectCard';
import { useTranslations } from 'next-intl';

const Projects = () => {
    const t = useTranslations();
    const data = [
        {
            title: t('Projects.Discord.title'),
            link: 'https://github.com/devlloni/discord-teemo-song-bot',
            imageName: 'project_discord_bot.png',
            description: t('Projects.Discord.description')
        },
        {
            title: t('Projects.ABC.title'),
            link: 'assdfdf',
            imageName: 'project_abc_platform.png',
            description: t('Projects.ABC.description')
        },
        {
            title: 'Dance With Shaco? idk play (:',
            link: 'asdfasdfdasf',
            imageName: 'project_discord_bot.png',
            description: 'Lorem ipsum lorem asdfasdfas asdfasd fdasfa',
        },
    ];

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data.map((d) => (
                        <ProjectCard 
                            key={d.title}
                            title={d.title}
                            description={d.description}
                            imageName={d.imageName}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
