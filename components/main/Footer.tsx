const Footer = () => {
  return (
    <div
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] border-t border-gray-500 py-12 pt-16 border-opacity-25">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[18px]"><a href="https://www.linkedin.com/in/oluwatosin-ogunjobi/" target="_blank">LinkedIn</a></div>

          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[18px]"><a href="https://github.com/oogunjob/" target="_blank">GitHub</a></div>

          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[18px]"><a href="mailto:oogunjob@gmail.com" target="_blank">Email</a></div>

          </div>
        </div>
        <div className="my-[20px] text-lg text-center">
          &copy; Tosin Ogunjobi 2024. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
