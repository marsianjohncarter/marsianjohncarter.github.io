'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useOutsideClick } from '@/hooks/use-outside-click';
import ProjectImageCarousel from './project-image-carousel';

export default function ProjectSection() {
    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === 'Escape') {
                setActive(false);
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <div
                id="projects"
                className="max-w-[90%] md:max-w-5xl mx-auto px-4 dark:text-white"
            >
                <div className="text-center px-8 py-4 my-15 rounded-4xl border border-zinc-200 dark:border-zinc-800">
                    <h1 className="text-5xl font-bold my-10">Projects</h1>
                    <p className="mb-10 italic opacity-55 text-sm">
                        Things I've created throughout the years.
                    </p>
                    <AnimatePresence>
                        {active && typeof active === 'object' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/20 h-full w-full z-10"
                            />
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {active && typeof active === 'object' ? (
                            <div className="fixed inset-0 grid place-items-center z-[100] px-4 overflow-scroll scrollbar-hidden">
                                {/* Close Icon */}
                                <motion.button
                                    key={`button-${active.title}-${id}`}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.05 },
                                    }}
                                    className="flex absolute top-6 right-6 items-center justify-center bg-white rounded-full h-8 w-8 z-[101] cursor-pointer"
                                    onClick={() => setActive(null)}
                                >
                                    <CloseIcon />
                                </motion.button>
                                {/* Main card */}
                                <motion.div
                                    layoutId={`card-${active.title}-${id}`}
                                    ref={ref}
                                    className="w-full max-w-4xl bg-white dark:bg-neutral-900 dark:border dark:border-zinc-700 sm:rounded-3xl flex flex-col mt-10 "
                                >
                                    {/* Card image */}

                                    <div className="px-15">
                                        <div className="flex flex-col md:flex-row gap-4 py-10">
                                            <motion.a
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                href={active.ctaLink}
                                                target="_blank"
                                                className={`px-4 py-3 text-sm rounded-2xl w-full max-h-11 font-bold bg-violet-500 hover:bg-violet-600 border-5 border-violet-700 border-t border-l active:border-b active:border-r active:border-t-5 active:border-l-5  text-white transition-colors duration-200 ${
                                                    active.ctaText ===
                                                    'View Code'
                                                        ? 'hidden'
                                                        : ' block'
                                                }`}
                                            >
                                                {active.ctaText}
                                            </motion.a>
                                            <motion.a
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                href={active.codeLink}
                                                target="_blank"
                                                className={`px-4 py-3 text-sm rounded-2xl w-full max-h-11 font-bold bg-violet-500 hover:bg-violet-600 border-5 border-violet-700 border-t border-l active:border-b active:border-r active:border-t-5 active:border-l-5  text-white transition-colors duration-200 `}
                                            >
                                                {active.codeText}
                                            </motion.a>
                                        </div>
                                        <ProjectImageCarousel
                                            slides={active.images}
                                            options={{
                                                loop: true,
                                                align: 'start',
                                                dragFree: true,
                                                prevBtnDisabled: false,
                                                nextBtnDisabled: false,
                                            }}
                                        />

                                        <div className="h-full row-span-2">
                                            <div className="px-4 my-10 pb-10">
                                                <motion.h3
                                                    layoutId={`title-${active.title}-${id}`}
                                                    className="font-medium text-2xl pb-5 text-neutral-700 dark:text-neutral-200"
                                                >
                                                    {active.title}
                                                </motion.h3>
                                                <motion.div
                                                    layout
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="px-4 pb-6"
                                                >
                                                    <div className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base flex items-center text-center">
                                                        {typeof active.content ===
                                                        'function'
                                                            ? active.content()
                                                            : active.content}
                                                    </div>
                                                </motion.div>

                                                <motion.p
                                                    layoutId={`info-${active.info}-${id}`}
                                                    className="text-neutral-600 dark:text-neutral-400 text-base"
                                                >
                                                    {active.info}
                                                </motion.p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ) : null}
                    </AnimatePresence>

                    <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
                        {cards.map((card) => (
                            <motion.div
                                layoutId={`card-${card.title}-${id}`}
                                key={card.title}
                                onClick={() => setActive(card)}
                                className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-4xl cursor-pointer transition-colors duration-300"
                            >
                                <div className="flex gap-4 flex-col w-full">
                                    <motion.div
                                        layoutId={`image-${card.title}-${id}`}
                                    >
                                        <Image
                                            src={card.src}
                                            width={0}
                                            height={0} 
                                            sizes="100vw"
                                            alt={card.title}
                                            priority={true}
                                            className="h-60 w-full rounded-3xl object-cover aspect-video bg-gray-200 border border-zinc-200 dark:border-zinc-700"
                                        />
                                    </motion.div>
                                    <div className="flex justify-center items-center flex-col">
                                        <motion.h3
                                            layoutId={`title-${card.title}-${id}`}
                                            className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                                        >
                                            {card.title}
                                        </motion.h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.05 },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const skillIcons = {
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    NextJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    Tailwind:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    Numpy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    Typescript:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    Firebase:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    Vercel: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
    MongoDB:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    PNPM: 'https://img.icons8.com/fluency/48/pnpm.png',
    JavaScript:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    Bootstrap:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    Qt: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg',
};

const skillsUsed = ({ skills }) => {
    return (
        <div className="flex flex-wrap gap-4 dark:bg-zinc-800 border dark:border-zinc-700 p-3 rounded-3xl mx-auto justify-center">
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="bg-zinc-100 dark:bg-zinc-700 border dark:border-zinc-600 p-0 md:p-2 rounded-full flex gap-2 hover:scale-110 transition-all duration-200"
                >
                    <Image
                        width={30}
                        height={30}
                        src={skillIcons[skill.name]}
                        alt={skill.name}
                        className="p-1"
                    />
                </div>
            ))}
        </div>
    );
};

const cards = [
    {
        description:
            'Olhar Device is a Python application that provides a user interface for video playback and QR code generation.',
        info: 'This Python application is designed to download and display videos. It provides a user interface for video playback and also a QR code generation function. The application utilizes various functionalities including location retrieval, screen brightness adjustment, and video download.',
        title: 'Olhar Device',
        src: '/img/OLHAR-image-1.png',
        images: [{ src: '/img/OLHAR-image-1.png', alt: 'Olhar Device' }],
        ctaText: 'Visit',
        ctaLink: 'https://olhar.media/',
        codeLink: 'https://github.com/loeclos/OlharDevice',
        codeText: 'View Code',
        content: () => {
            return skillsUsed({
                skills: [
                    {
                        name: 'Python',
                    },
                    {
                        name: 'Qt',
                    },
                    {
                        name: 'GitHub',
                    },
                    {
                        name: 'Git',
                    },
                ],
            });
        },
    },
    {
        description: 'Personal website created with React, Vite, and Tailwind.',
        info: 'Not much to explain. It is before your own eyes.',
        title: 'Portfolio Website',
        src: '/img/PORTFOLIO-image-1.png',
        images: [
            {
                src: '/img/PORTFOLIO-image-1.png',
                alt: 'Portfolio Website main section',
            },
            {
                src: '/img/PORTFOLIO-image-2.png',
                alt: 'Portfolio Website skills section',
            },
            {
                src: '/img/PORTFOLIO-image-3.png',
                alt: 'Portfolio Website projects section',
            },
        ],

        ctaText: 'Visit',
        ctaLink: '/',
        codeLink: 'https://github.com/loeclos/loeclos.github.io',
        codeText: 'View Code',
        content: () => {
            return skillsUsed({
                skills: [
                    {
                        name: 'React',
                    },
                    {
                        name: 'NextJs',
                    },
                    {
                        name: 'Vite',
                    },
                    {
                        name: 'Tailwind',
                    },
                    {
                        name: 'GitHub',
                    },
                    {
                        name: 'Git',
                    },
                    {
                        name: 'Vercel',
                    },
                ],
            });
        },
    },
    {
        description:
            'A multi-page app created with React, Vite, and Tailwind. This app has a blog, contact page, and about page.',
        info: 'A multi-page app created with React, Vite, and Tailwind. This app has a blog, contact page, and about page.',
        title: 'Media Team Website',
        src: '/img/GABC-image-1.png',
        images: [
            { src: '/img/GABC-image-1.png', alt: 'Media Team Website' },
            { src: '/img/GABC-image-2.png', alt: 'Media Team Website image 2' },
        ],
        ctaText: 'Visit',
        ctaLink: 'https://gabc-media-team.web.app/',
        codeLink: 'https://github.com/loeclos/gabc-media-team',
        codeText: 'View Code',
        content: () => {
            return skillsUsed({
                skills: [
                    {
                        name: 'React',
                    },
                    {
                        name: 'Vite',
                    },
                    {
                        name: 'Tailwind',
                    },
                    {
                        name: 'Firebase',
                    },
                ],
            });
        },
    },
    {
        description:
            'A simple multi-page site created with React, Vite, and Tailwind.',
        info: 'A simple multi-page site created with React, Vite, and Tailwind.',
        title: 'React + Vite + Tailwind Website',
        src: '/img/not-available.png',
        images: [{ src: '/img/not-available.png', alt: 'Not Available' }],

        ctaText: 'View Code',
        ctaLink: 'https://github.com/loeclos/github-react-example',
        codeLink: 'https://github.com/loeclos/github-react-example',
        codeText: 'View Code',
        content: () => {
            return skillsUsed({
                skills: [
                    {
                        name: 'React',
                    },
                    {
                        name: 'Vite',
                    },
                    {
                        name: 'Tailwind',
                    },
                ],
            });
        },
    },
    {
        description:
            'A website for a chess player, created with React, Vite, and Tailwind. The website features a blog, contact page, and about page.',
        info: 'A website for a chess player, created with React, Vite, and Tailwind. The website features a blog, contact page, and about page.',
        title: 'Chess Website',
        src: '/img/CHESS-image-1.png',
        images: [
            { src: '/img/CHESS-image-1.png', alt: 'Chess Website' },
            { src: '/img/CHESS-image-2.png', alt: 'Chess Website image 2' },
        ],

        ctaText: 'Visit',
        ctaLink: 'https://chessgame-85747.vercel.app/',
        codeLink: 'https://github.com/loeclos/chess-website',
        codeText: 'View Code',
        content: () => {
            return skillsUsed({
                skills: [
                    {
                        name: 'JavaScript',
                    },
                    {
                        name: 'Bootstrap',
                    },
                ],
            });
        },
    },
    {
        description:
            'A website for a nutritionist, created with React, Vite, and Tailwind. The website features a blog, contact page, and about page.',
        info: 'A website for a nutritionist, created with React, Vite, and Tailwind. The website features a blog, contact page, and about page.',
        title: 'Nutrify Website',
        src: '/img/NUTRIFY-image-1.png',
        images: [
            { src: '/img/NUTRIFY-image-1.png', alt: 'Nutrify Website' },
            { src: '/img/NUTRIFY-image-2.png', alt: 'Nutrify Website image 2' },
        ],
        ctaText: 'Visit',
        ctaLink: 'https://nutrify-preview.web.app/',
        codeLink: 'https://github.com/loeclos/nutrify-website',
        codeText: 'View Code',
        content: () => {
            return skillsUsed({
                skills: [
                    {
                        name: 'React',
                    },
                    {
                        name: 'Vite',
                    },
                    {
                        name: 'Tailwind',
                    },
                    {
                        name: 'Firebase',
                    },
                ],
            });
        },
    },
    {
        description: 'A minimal portfolio template for developers',
        info: 'A minimal portfolio template for developers',
        title: ' Minifolio ⚡',
        src: '/img/MINIFOLIO-image-1.png',
        images: [
            { src: '/img/MINIFOLIO-image-1.png', alt: 'Minifolio' },
            { src: '/img/MINIFOLIO-image-2.png', alt: 'Minifolio image 2' },
        ],

        ctaText: 'Visit',
        ctaLink: 'https://minifolio-snowy.vercel.app/',
        codeLink: 'https://github.com/loeclos/Minifolio',
        codeText: 'View Code',
        content: () => {
            return skillsUsed({
                skills: [
                    {
                        name: 'React',
                    },
                    {
                        name: 'NextJs',
                    },
                    {
                        name: 'CSS3',
                    },
                    {
                        name: 'Typescript',
                    },
                ],
            });
        },
    },
];
