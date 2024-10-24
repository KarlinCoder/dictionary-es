import { FaGithub, FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="p-4 flex flex-col justify-center items-center w-full bg-gradient-to-r from-slate-600 to-neutral-600">
      <h2 className="text-lg text-slate-200">
        by KarlinCoder (Giancarlo Dennis)
      </h2>
      <div className="flex justify-center gap-1 items-center text-slate-200 text-2xl">
        <a
          href="https://github.com/KarlinCoder"
          className="hover:text-slate-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/its.karlin.coder"
          className="hover:text-slate-400"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};
