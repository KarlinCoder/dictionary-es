import { FaGithub, FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="p-4 w-full bg-neutral-700">
      <h2>by KarlinCoder</h2>
      <div className="flex justify-center items-center">
        <a href="https://github.com/KarlinCoder">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/its.karlin.coder">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};
