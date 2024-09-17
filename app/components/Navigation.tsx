import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Day from "../assets/day.png";
import Night from "../assets/night.png";
import { useState } from "react";

export default function Navigation() {
  const [night, setNight] = useState(false);

  return (
    <div className="flex w-full max-w-[1280px] mx-auto justify-between p-4 items-center">
      <div>
        <h1 className="font-heading text-2xl">Aaron Ahn</h1>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/aaron-ahn/">
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="w-5 h-5"
            target="_blank"
          />
        </a>
        <a href="https://github.com/eusahn">
          <img src={Github} alt="Github" className="w-5 h-5" target="_blank" />
        </a>
        <span className="cursor-pointer">
          <img src={Day} alt="Day" className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
}
