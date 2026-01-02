import { Icons } from "@/components/icons";
import { HomeIcon, FolderIcon } from "lucide-react";

export const DATA = {
  name: "Tosin Ogunjobi",
  initials: "TO",
  url: "https://github.com/oogunjob",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/odisha",
  description:
    "",
  summary:
    "I'm a software engineer with a strong foundation in system design and experience building scalable, production-grade applications and services. My work spans mobile development, backend services, and cloud infrastructure, with hands-on experience in real-time data, authentication, subscriptions, monitoring, and artificial intelligence–powered features. I’ve shipped multiple products and features at Microsoft, including Transcript Translations and Audio Descriptions in Microsoft Stream, as well as agentic experiences within Office AI.\n\nIn my personal time, I build cross-platform iOS and Android products, integrate LLM APIs, and contribute to open source. I'm motivated by working in professional engineering environments while also advancing Bitcoin technology and adoption through practical, security-focused software.",
  avatarUrl: "/me.png",
  skills: [
    "System Design",
    "Python",
    "Java",
    "C++",
    "Swift",
    "React",
    "Typescript",
    "Go",
    "C#",
    "SQL",
    "Kotlin",
    "AWS",
    "Docker",
    "LLM APIs",
    "Redis",
    "Git",
    "OAuth/JWT"
  ],
  videos: [
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/gadgets", icon: Icons.shop, label: "Gadgets" },
  ],
  contact: {
    email: "oogunjob@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/oogunjob",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oluwatosin-ogunjobi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tosinxogunjobi",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@oogunjob",
        icon: Icons.youtube,
        navbar: true,
      },
      CodePen: {
        name: "CodePen",
        url: "https://codepen.io/oogunjob",
        icon: Icons.codepen,
        navbar: true,
      },
      Vercel: {
        name: "Vercel",
        url: "https://v0.link/Tosin-nayak",
        icon: Icons.vercel,
        navbar: true,
      },
      buyMeACoffee: {
        name: "buyMeACoffee",
        url: "https://buymeacoffee.com/prasen",
        icon: Icons.buyMeACoffee,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:oogunjob@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Microsoft",
      href: "https://www.linkedin.com/company/microsoft/",
      badges: [],
      location: "Redmond, WA",
      title: "Software Engineer",
      logoUrl: "/microsoft.png",
      start: "August 2022",
      end: "Pressent",
      contributions: [
        "Former contributor to Office AI, delivering agentic, AI-powered experiences using Microsoft Copilot Studio, enabling customers to automate workflows and interact with intelligent agents at enterprise scale",
        "Previously contributed to Microsoft Stream, a flagship enterprise video platform used by hundreds of global organizations and universities, supporting features relied on by millions of monthly active users",
        "Contributed to the launch of Audio Descriptions, improving video accessibility for visually impaired users and advancing Microsoft's accessibility commitments across enterprise video content",
        "Instrumental in launching Transcript Translations, enabling video transcripts to be translated into 120+ languages, significantly expanding global accessibility and unlocking new enterprise adoption and revenue opportunities for Microsoft Stream"
      ]
    },
    {
      company: "Microsoft",
      href: "https://www.linkedin.com/company/microsoft/",
      badges: [],
      location: "Redmond, WA",
      title: "Software Engineer Intern",
      logoUrl: "/microsoft.png",
      start: "May 2021",
      end: "August 2021",
      contributions: [
        "Led a 12-week project to design and implement a filter using FFmpeg's open-source technology, streamlining Azure Cognitive Services for Microsoft Stream's automatic transcription feature",
        "Architected an interop layer bridging C++ and C# languages, enabling seamless integration of the FFmpeg filter into the existing C# repository",
        "Collaborated closely with senior developers to craft a robust pipeline for the filter application, ensuring efficient and reliable performance throughout the transcription process",
        "Incorporated Azure Cognitive Services into the transcription workflow, directly contributing to a ~10% reduction in transcription costs—a significant monetary savings for the company"
      ]
    },
    {
      company: "Microsoft",
      href: "https://www.linkedin.com/company/microsoft/",
      badges: [],
      location: "Redmond, WA",
      title: "Explore Intern",
      logoUrl: "/microsoft.png",
      start: "May 2020",
      end: "August 2020",
      contributions: [
        "Collaborated in a team with two fellow interns to develop a student-centric video streaming platform on Microsoft Stream, utilizing TypeScript and React, addressing the need for enhanced online learning during the COVID pandemic",
        "Developed key features such as video chaptering, in-video note taking, and interactive quizzes to enhance student engagement and comprehension during video sessions",
        "Assumed project management responsibilities, liaising with stakeholders to gather crucial feedback and steering the project direction to align with user requirements",
        "Led user-centric product testing by orchestrating surveys and focus groups, ensuring the platform met real-world educational needs; partnered with designers to craft an intuitive UI/UX using Figma"
      ]
    }
  ],
  education: [
    {
      school: "Purdue University",
      href: "https://www.purdue.edu/",
      degree: "Bachelor of Science, Computer Engineering",
      logoUrl: "/purdue.webp",
      start: "August 2018",
      end: "May 2022",
    },
    {
      school: "Lutheran High School North",
      href: "https://www.lhsnstl.org/",
      degree: "High School Diploma",
      logoUrl: "/lutherannorth.png",
      start: "August 2014",
      end: "May 2018",
    },
  ],
  projects: [
    {
      title: "Odyssey - Bitcoin Learning Mobile App",
      href: "https://www.odysseybtc.app/",
      dates: "August 2025 - Present",
      active: true,
      description:
        "A super minimalist write experience, type with minimalist, no noise and distraction, completely fresh Windows app, with a clean UI and no ads, just pure writing experience.",
      technologies: [
        "React Native",
        "Expo",
        "Typescript",
        "Postgres",
        "CSS",
        "Supabase",
        "Sentry",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.odysseybtc.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/oogunjob/Odyssey-Bitcoin-Mobile-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HRZN - Open Source Bitcoin Wallet",
      href: "https://github.com/oogunjob/HRZN-Mobile-App",
      dates: "December 2025 - Present",
      active: true,
      description:
        "An open source Bitcoin wallet application providing secure, user-friendly Bitcoin storage and transaction capabilities with a focus on privacy and security.",
      technologies: [
        "React Native",
        "Expo",
        "Typescript",
        "Postgres",
        "CSS",
        "Supabase",
        "Sentry",
        "AWS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/oogunjob/HRZN-Mobile-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MIXX Mobile App",
      href: "https://github.com/oogunjob/MIXX-Mobile-App",
      dates: "August 2024 - May 2025",
      active: false,
      description:
        "A mobile app delivering personalized hip-hop, R&B, cultural news, and music discovery with AI-powered features to help users discover new artists worldwide.",
      technologies: [
        "React Native",
        "Expo",
        "Typescript",
        "CSS",
        "Supabase",
        "AWS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/oogunjob/MIXX-Mobile-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Music-Lineup-IO",
      href: "https://github.com/oogunjob/Music-Lineup-IO",
      dates: "February 2024 - March 2024",
      active: false,
      description:
        "A free graphic creator that presents your favorite musical artists and songs in NBA All-Star themed cards that you can share with friends, inspired by Instafest.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Spotify API",
        "Apple Music API",
        "TypeScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/oogunjob/Music-Lineup-IO",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "STM32F091-Fruit-Ninja-Clone",
      href: "https://github.com/oogunjob/STM32F091-Fruit-Ninja-Clone",
      dates: "May 2022",
      active: false,
      description:
        "A real-time game implementation for the STM32F091 microcontroller featuring touchscreen input, sprite rendering, collision detection, and game mechanics. Developed as a senior class project for ECE 262.",
      technologies: [
        "C",
        "STM32",
        "Embedded Systems",
        "Touchscreen Interface",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/oogunjob/STM32F091-Fruit-Ninja-Clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FX-Signal-Copier-Telegram-Bot",
      href: "https://github.com/oogunjob/FX-Signal-Copier-Telegram-Bot",
      dates: "October 2022 - February 2023",
      active: false,
      description:
        "A Telegram bot that automatically enters trades from trading signals directly into MT4 accounts with calculated trade information and risk management.",
      technologies: [
        "Python",
        "Heroku",
        "Telegram Bot API",
        "MT4 Integration",
        "Forex Trading",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/oogunjob/FX-Signal-Copier-Telegram-Bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Lantern: Free Accounting Software for Small Businesses",
      href: "https://github.com/oogunjob/Lantern-Client",
      dates: "January 2022 - May 2022",
      active: false,
      description:
        "A free, open source web application that gives small businesses the ability to track and account for all income and cash flow along with providing computed detailed reports and financial analytics.",
      technologies: [
        "TypeScript",
        "React",
        "Express.js",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/oogunjob/Lantern-Client",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [
  ],
} as const;