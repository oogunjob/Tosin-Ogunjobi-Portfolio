import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center pb-20">
      <h1 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 px-10">
        <ProjectCard
          src="/project-1.png"
          title="Latern"
          description="Open Source financial planning web application for small businesses."
          link="https://saint-stream-peach.vercel.app"
        />
        <ProjectCard
          src="/project-2.png"
          title="Melody Migrate"
          description="Open source web application to transfer music playlists between different streaming platforms."
          link="https://dev-overflow-alimogh.vercel.app"
        />
        <ProjectCard
          src="/project-3.png"
          title="Transcript Translations"
          description="Feature added to Microsoft Stream that allows users to translate transcripts of audio into over 120 languages."
          link="https://car-showcase-livid-mu.vercel.app"
        />
        <ProjectCard
          src="/project-4.png"
          title="FX Telegram Copy Trader"
          description="Open source tool that allows Forex traders to copy trades from Telegram to their own trading platform with auto parsing leveraged from GPT-4."
          link="https://next-commerce-one-ivory.vercel.app"
        />
        <ProjectCard
          src="/project-5.png"
          title="STM32F091 Fruit Ninja Clone"
          description="Senior project that allows users to play the popular game Fruit Ninja on a STM32F091 microcontroller written in C."
          link="https://quantum-alimogh.vercel.app"
        />
        <ProjectCard
          src="/project-6.png"
          title="Music Lineup IO"
          description="Upload your course, price it, and let people watch it."
          link="https://insightq.vercel.app"
        />
      </div>
    </div>
  );
};

export default Projects;
