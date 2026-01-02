import dynamic from 'next/dynamic';
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PersonSchema } from "@/components/schema/person-schema";
import { Metadata } from 'next';
import { Icons } from "@/components/icons";
import ShinyButton from "@/components/ui/shiny-button";
import { GithubSkeleton } from "@/components/skeletons/github-skeleton";
import { ProjectSkeleton } from "@/components/skeletons/project-skeleton";
import { InteractiveParticleBackground } from "@/components/interactive-particle-background";
const BLUR_FADE_DELAY = 0.04;
export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.summary,
  openGraph: {
    title: DATA.name,
    description: DATA.summary,
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: 'https://www.tosinogunjobi.com/portfolio.png',
        width: 1200,
        height: 630,
        alt: `${DATA.name}'s Portfolio`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DATA.name,
    description: DATA.summary,
    creator: '@' + 'oogunjob',
    images: ['https://www.tosinogunjobi.com/portfolio.png'],
  },
};

const GithubContributions = dynamic(() => import("@/components/github-calendar").then(mod => mod.GithubContributions), {
  ssr: false,
  loading: () => <GithubSkeleton />
});

const ProjectCardDynamic = dynamic(() => import("@/components/project-card").then(mod => mod.ProjectCard), {
  ssr: true,
  loading: () => <ProjectSkeleton />
});

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <InteractiveParticleBackground />
      </div>
      
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <PersonSchema />
        <section id="hero" className="bg-background/95 backdrop-blur-sm">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-4">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hey, I'm Tosin! 👋🏽`}
                />
                <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                  <div className="text-lg font-medium text-muted-foreground">
                    Software Engineer | Problem-Solver | Seattle, WA
                  </div>
                </BlurFade>
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="profile-wrapper">
                  <Avatar className="size-28 relative z-10">
                    <AvatarImage
                      alt={DATA.name}
                      src={DATA.avatarUrl}
                      width={112}
                      height={112}
                      loading="eager"
                    />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
        
        <section id="about" className="bg-background/95 backdrop-blur-sm px-4 py-8 rounded-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-2xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        <section id="work" className="bg-background/95 backdrop-blur-sm px-4 py-8 rounded-lg">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 7 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  badges={work.badges}
                  period={`${work.start} - ${work.end}`}
                  // description={work.description}
                  contributions={work.contributions}
                  target="_blank"
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="education" className="bg-background/95 backdrop-blur-sm px-4 py-8 rounded-lg">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 9 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  target="_blank"
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="skills" className="bg-background/95 backdrop-blur-sm px-4 py-8 rounded-lg">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                  <Badge key={skill} className="text-sm">{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="bg-background/95 backdrop-blur-sm px-4 py-8 rounded-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">Resume</h2>
            <div className="mt-6">
              <a
                href="/Oluwatosin_Ogunjobi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                <Icons.download className="size-4" />
                Download My Resume
              </a>
            </div>
          </BlurFade>
        </section>

        <section id="contributions" className="bg-background/95 backdrop-blur-sm px-4 py-8 rounded-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">GitHub Contributions</h2>
            <GithubContributions />
          </BlurFade>
        </section>

        <section id="projects" className="bg-background/95 backdrop-blur-sm px-4 py-8 rounded-lg">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <h2 className="text-xl font-bold">Featured Projects</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <div className="grid gap-4">
                {DATA.projects
                  .filter((project) => project.active)
                  .slice(0, 2)
                  .map((project) => (
                    <div key={project.title} className="relative overflow-hidden rounded-xl">
                      <ProjectCard
                        {...project}
                        tags={Array.from(project.technologies)}
                      />
                    </div>
                  ))}
              </div>
              <Link
                href="/projects"
                className="mt-4 block"
              >
                <ShinyButton
                  className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold"
                >
                  View All Projects →
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
        </section>

        <section id="contact" className="bg-background/95 backdrop-blur-sm px-4 py-8 rounded-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Contact</h2>
              
              <p className="text-muted-foreground">
                Welcoming professional opportunities, project-based collaborations, and technical conversations. Please reach out below 👇🏽
              </p>
              
              <div className="mt-6 space-y-4">
                <a
                  href="mailto:oogunjob@gmail.com"
                  className="flex items-center gap-2 underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  <Icons.email className="size-4" />
                  oogunjob@gmail.com
                </a>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={DATA.contact.social.X.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    <DATA.contact.social.X.icon className="size-4" />
                    Connect on X
                  </a>

                  <a
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    <DATA.contact.social.GitHub.icon className="size-4" />
                    GitHub
                  </a>

                  <a
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    <DATA.contact.social.LinkedIn.icon className="size-4" />
                    LinkedIn
                  </a>

                  <a
                    href={DATA.contact.social.Youtube.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    <DATA.contact.social.Youtube.icon className="size-4" />
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </BlurFade>
        </section>
        <footer className="mt-20 border-t py-8 bg-background/95 backdrop-blur-sm">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-base text-muted-foreground space-y-2">
                  <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
                  <p>
                    Open source under{' '}
                    <a 
                      href="https://opensource.org/licenses/MIT" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground"
                    >
                      MIT License
                    </a>
                    {' '}and available on{' '}
                    <a 
                      href="https://github.com/oogunjob/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </footer>
      </main>
    </>
  );
}