import { Socials } from "@/constants";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] z-[150] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="hidden sm:flex flex-row items-center gap-x-2 mr-2.5 lg:mr-0">
          <CodeBracketIcon className="h-7 w-7 fill-[#9cb2ff]" />
          <span className="font-normal text-lg hidden lg:block text-gray-100 custom-font">
            Tosin Ogunjobi
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between mr-0 md:mr-20">
          <div className="flex items-center justify-between text-sm sm:text-base font-medium w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills / Organizations
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="hidden sm:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank">
              <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
