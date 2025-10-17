import React from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/next';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
       viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
       className="h-6 w-6">
    <path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// const XIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//        viewBox="0 0 24 24" fill="currentColor"
//        className="h-6 w-6">
//     <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
//   </svg>
// );

// const LinkedinIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//        fill="none" stroke="currentColor" strokeWidth="2"
//        strokeLinecap="round" strokeLinejoin="round"
//        className="h-6 w-6">
//     <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
//     <rect width="4" height="12" x="2" y="9" />
//     <circle cx="4" cy="4" r="2" />
//   </svg>
// );

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round"
       className="h-6 w-6">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
);

// const DiscordIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//        viewBox="0 0 24 24" fill="currentColor"
//        className="h-6 w-6">
//     <path d="M20.317 4.437a20.9 20.9 0 00-4.43-1.612C15.59 2.14 15.08 1.48 14.41 1c-1.37-.96-3.45-1-3.45-1-1.37.12-2.88.6-3.96 1.48-.36.24-.72.48-1.08.72-1.2.6-2.4 1.2-3.48 2.04-2.4 1.8-3.12 4.32-3.12 4.32s.12 1.44 1.2 2.64c0 0 .12.12.24.24.96.84 2.04 1.44 3.24 1.8 1.08.24 2.16.48 3.24.48.96 0 2.04-.12 3-.48 1.32-.36 2.52-1.08 3.48-1.8.12-.12.24-.24.24-.24 1.08-1.2 1.2-2.64 1.2-2.64s-.72-2.52-3.12-4.32zM8.45 14.56c-.84 0-1.56-.72-1.56-1.56s.72-1.56 1.56-1.56 1.56.72 1.56 1.56-.72 1.56-1.56 1.56zm7.2 0c-.84 0-1.56-.72-1.56-1.56s.72-1.56 1.56-1.56 1.56.72 1.56 1.56-.84 1.56-1.56 1.56z" />
//   </svg>
// );

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/dhairyajangir',
    icon: <GithubIcon />,
  },
  // {
  //   name: 'X',
  //   url: 'https://x.com/DhairyaJangir',
  //   icon: <XIcon />,
  // },
  // {
  //   name: 'LinkedIn',
  //   url: 'https://linkedin.com/in/dhairya-jangir-163aaa318/',
  //   icon: <LinkedinIcon />,
  // },
  {
    name: 'Mail',
    url: 'mailto:dhairyajangir@gmail.com',
    icon: <MailIcon />,
  },
  // {
  //   name: 'Discord',
  //   url: '#',
  //   title: 'warewolf13',
  //   icon: <DiscordIcon />,
  // },
];


export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>dhairya</title>
        <meta name="description" content="Dhairya Jangir" />
        <link rel="icon" href="/dj.ico" />
      </Head>
      <main className="min-h-screen w-full bg-zinc-950 text-zinc-100 flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-white to-zinc-400 text-transparent bg-clip-text drop-shadow-sm">
            dhairya
          </h1>
        <div className="flex justify-center gap-6 pt-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              // title={link.title || link.name}
              title={link.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-zinc-400 hover:text-white transition duration-300 hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <Analytics />
    </main>
    </>
  );
}
