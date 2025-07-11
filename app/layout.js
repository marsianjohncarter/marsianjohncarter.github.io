import { dmMono } from '@/ui/lib/fonts';
import Script from 'next/script';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ThemeProvider from '@/ui/theme/theme-provider';

import './globals.css';

export const metadata = {
    title: 'loeclos',
    description:
        'loeclos portfolio website | Gleb Zhukov | Web Developer | React Developer | The asteroid of programming | Can be found on reddit, github, discord, and many other places. ',
};

const links = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'Skills', href: '#skills' },
    { id: 3, text: 'Projects', href: '#projects' },
];

export default function RootLayout({ children }) {
    
    return (
        <html lang="en" suppressHydrationWarning>
            <Script
                async
                id="google-analytics-load-script"
                src="https://www.googletagmanager.com/gtag/js?id=G-NHZ14B3DLH"
            ></Script>
            <Script id="google-analytics-script">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
            </Script>
            <body
                className={`${dmMono.className} antialiased transition-all delay-150 duration-300`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    storageKey="theme"
                >
                    <div className="fixed top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] hidden dark:block"></div>
                    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] block dark:hidden"></div>
                    <Navbar links={links} />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
