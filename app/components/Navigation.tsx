import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Day from "../assets/day.png";
import Night from "../assets/night.png";

interface NavigationProps {
  isDarkMode: boolean;
  onChange: (isDarkMode: boolean) => void;
}
export default function Navigation(props: NavigationProps) {
  return (
    <div className="flex w-full max-w-[1280px] mx-auto justify-between p-4 items-center">
      <div>
        <h1 className="font-heading text-2xl dark:text-white">Aaron Ahn</h1>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/aaron-ahn/" target="_blank">
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="w-5 h-5"
          />
        </a>
        <a href="https://github.com/eusahn" target="_blank">
          <img src={Github} alt="Github" className="w-5 h-5" />
        </a>
        <span className="cursor-pointer" onClick={(evt) => { props.onChange(!props.isDarkMode) }}>
          {props.isDarkMode ? (
            <img src={Day} alt="Day" className="w-5 h-5" />
          ) : (
            <img src={Night} alt="Night" className="w-5 h-5" />
          )}
        </span>
      </div>
    </div>
  );
}
