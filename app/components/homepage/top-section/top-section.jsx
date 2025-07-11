'use client';

import { Card, CardFooter } from '@/ui/card';
import Button from '@/ui/button';
import Link from 'next/link';

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 20,
            behavior: 'smooth',
        });
    }
}

export default function TopSection() {
    return (
        <div className="grid grid-rows-1 md:grid-rows-2 gap-4 max-w-[90%] md:max-w-5xl mx-auto pt-45 md:pt-32 px-4">
            <Card className="py-12 px-8 flex flex-col justify-center backdrop-blur-2xl rounded-4xl">
                <h1 className="text-4xl font-bold mb-2">Hello!</h1>
                <p className="text-lg mb-8">
                    My name is gleb and I'm a Frontend | Flask Backend | Machine
                    Learning developer
                </p>
                <Button
                    variant={'violet'}
                    onClick={() => scrollToSection('skills')}
                >
                    Jump to my skills {'->'}
                </Button>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="backdrop-blur-2xl py-12 px-8  rounded-4xl">
                    <p className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-5 cursor-pointer">
                        Code
                    </p>
                    <h1 className="text-2xl font-bold mb-3">Featured Works</h1>
                    <p className="mb-5">
                        Explore the code, learn about the technologies used, and
                        understand the thought process behind my design
                        decisions.
                    </p>
                    <CardFooter className={'mx-auto text-center bottom-0'}>
                        <Button
                            variant="amber"
                            onClick={() => scrollToSection('projects')}
                        >
                            {'--'} Projects {'--'}
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="backdrop-blur-2xl py-12 px-8 rounded-4xl">
                    <p className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-5 cursor-pointer">
                        Socials
                    </p>
                    <h1 className="text-2xl font-bold mb-3">Github Profile</h1>
                    <p className="mb-5">
                        Discover the technical foundation that drives my work. I
                        possess a strong command of programming languages,
                        frameworks, and tools.
                    </p>
                    <CardFooter className={'mx-auto text-center bottom-0'}>
                        <Link
                            href={'https://github.com/loeclos'}
                            target={'_blank'}
                        >
                            <Button variant="amber">
                                {'-- '} Github {' --'}
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
