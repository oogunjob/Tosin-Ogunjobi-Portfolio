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
    {
      title: "Track Your Coding time for free",
      description: "Learn how to track your code time with complete analytics and insights.",
      thumbnail: "/video1.avif",
      url: "https://youtu.be/tBatfQjWxCg?si=sy2vZbCHoIYNME-3",
      date: "2024-05-15"
    },
    {
      title: "Fix multi-cursor in VS Code",
      description: "Simple trick to fix multi-cursor in VS Code.",
      thumbnail: "/video2.avif",
      url: "https://youtu.be/E9h7M6ZK_tA?si=ykzV7ARU4VMnbBRo",
      date: "2024-07-01"
    },
    {
     title: "Twitter(X)'s monetization (Hindi)",
     description: "Is the policy broken? Let's find out.",
     thumbnail: "/video3.avif",
     url: "https://youtu.be/Z3h1jt6jKLY?si=blL4l4FNco9WW9FT",
     date: "2024-11-04"
    },
    {
      title:"How to fix any kind of ban in twitter (Hindi)",
      description: "Learn how to fix any kind of ban in twitter.",
      thumbnail: "/video4.avif",
      url:"https://youtu.be/P7JRFrcXlQU",
      date: "2024-12-24"
    },
    {
      title:"Microsoft's new shocking move (Hindi)",
      description: "GitHub Copilot is now free for everyone, let's see what's the catch.",
      thumbnail: "/video5.avif",
      url:"https://www.youtube.com/watch?v=uIJOUe8T3_I",
      date: "2024-12-19"
    },
    {
      title:"How to run DeepSeek R1 model locally (Hindi)",
      description:"Learn how to run DeepSeek R1 model locally, in easy steps",
      thumbnail: "/video6.avif",
      url:"https://youtu.be/BgB2pW6QgVg",
      date: "2025-01-29"
    },
    {
      title:"How to do zoom in and out video recording in Windows for free. (Hindi)",
      description:"Learn how to do zoom in and out video recording in Windows for free.",
      thumbnail: "/video7.avif",
      url:"https://youtu.be/WziGdEiT9fE",
      date: "2025-03-16"
    },
    {
      title:"I Finally Got My FIRST PC!",
      description: "In this video I talked about my first PC, overall experience was really good, I also talked about the components that I used in the PC in details as well as why to use them and why not.",
      thumbnail: "/video8.avif",
      url:"https://youtu.be/vHTbqgmB2U8",
      date: "2025-05-06"
    },
    {
      title:"How to Get Free Subscriptions for Notion, Cursor, Google, Perplexity & Free Domain Names (Hindi)",
      description: "In this video I talked about how to get free subscriptions for Notion, Cursor, Google, Perplexity & Free Domain Names.",
      thumbnail: "/video9.avif",
      url:"https://youtu.be/0Up-SjeSwI0",
      date: "2025-08-27"
    },
    {
      title:"The Truth About My 2025: Wins, Losses, & Regrets",
      description: "In this video, I break down the specific wins and devastating losses that defined my year, and the critical lessons I learned from them. This isn't just a highlight reel, it’s an honest look at what it takes to grow when life hits hard.",
      thumbnail: "/video10.avif",
      url:"https://youtu.be/iXPFdG9Ft7E",
      date: "2025-12-23"
    },
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
      description:
        "Learned about how to work in a fast-paced environment in a startup.",
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
      description:
        "Learned about how to work in a fast-paced environment in a startup.",
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
      description:
        "Learned about how to work in a fast-paced environment in a startup.",
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
          href: "https://github.com/oogunjob/Odyssey-Mobile-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Vault - Open Source Bitcoin Wallet",
      href: "https://github.com/oogunjob",
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
          href: "https://github.com/oogunjob",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MIXX",
      href: "https://github.com/oogunjob",
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
          href: "https://github.com/oogunjob",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Music-Lineup-IO",
      href: "https://github.com/oogunjob",
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
          href: "https://github.com/oogunjob",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "STM32F091-Fruit-Ninja-Clone",
      href: "https://github.com/oogunjob",
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
          href: "https://github.com/oogunjob",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FX-Signal-Copier-Telegram-Bot",
      href: "https://github.com/oogunjob",
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
          href: "https://github.com/oogunjob",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Lantern-Client",
      href: "https://github.com/oogunjob",
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
          href: "https://github.com/oogunjob",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "March 23rd - 25th, 2022",
      location: "Bhubaneswar, India",
      description:
        "Developed a learing portal with some free education content with the best paid contents too, the project was called as 'EducationX'.",
      image:
        "/smart-india-hackathon.webp",
      mlh: "https://github.com/Synchrotek/E-LearningX",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "December 19th - 23rd, 2023",
      location: "Bhubaneswar, India",
      description:
        "Developed A collaborative coding web platform that enables Multiuser collboration on a coding project in real-time with features of group chat, to-do lists.",
      image:
        "/logo.webp",
      mlh: "https://nexuslink01v.netlify.app/",
      links: [],
    },
  ],
} as const;