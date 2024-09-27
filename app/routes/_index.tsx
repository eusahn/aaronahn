import React, { useState, useEffect } from 'react';
import { Sun, Moon, Laptop, Github, Linkedin } from 'lucide-react';
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Aaron Ahn's Portfolio" },
    { name: "description", content: "Professional experience of Aaron Ahn" },
  ];
};

type ColorScheme = 'light' | 'dark' | 'system';

const Navigation = ({ colorScheme, onChange }: { colorScheme: ColorScheme; onChange: (scheme: ColorScheme) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const colorSchemeInfo = {
    light: { icon: Sun, label: 'Light' },
    dark: { icon: Moon, label: 'Dark' },
    system: { icon: Laptop, label: 'System' }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold font-serif">Aaron Ahn</h1>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/aaron-ahn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/eusahn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
                aria-label="Toggle color scheme"
              >
                {React.createElement(colorSchemeInfo[colorScheme].icon, { className: "h-4 w-4" })}
                <span className="text-sm font-sans">{colorSchemeInfo[colorScheme].label}</span>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 shadow-lg">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {(Object.keys(colorSchemeInfo) as ColorScheme[]).map((scheme) => (
                      <button
                        key={scheme}
                        onClick={() => {
                          onChange(scheme);
                          setIsOpen(false);
                        }}
                        className={`${colorScheme === scheme
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          } flex items-center w-full px-4 py-2 text-sm transition-colors duration-200 font-sans`}
                        role="menuitem"
                      >
                        {React.createElement(colorSchemeInfo[scheme].icon, { className: "h-4 w-4 mr-2" })}
                        <span>{colorSchemeInfo[scheme].label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ExperienceCard = ({ title, company, period, projects }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-all duration-300 hover:shadow-md">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-serif">{title}</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400 mb-1 font-sans">{company}</p>
    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 font-sans">{period}</p>
    {projects.map((project, index) => (
      <div key={index} className="mb-4 last:mb-0">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 font-serif">{project.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-sans">{project.tech}</p>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 font-sans">
          {project.responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default function Index() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedScheme = localStorage.getItem('colorScheme') as ColorScheme | null;
    if (savedScheme) {
      setColorScheme(savedScheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const applyColorScheme = (scheme: ColorScheme) => {
      localStorage.setItem('colorScheme', scheme);
      if (scheme === 'dark' || (scheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyColorScheme(colorScheme);

    if (colorScheme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyColorScheme('system');
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [colorScheme, mounted]);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Kongsberg Geospatial",
      period: "April 2022 - Present",
      projects: [
        {
          name: "212CD CDSS",
          tech: "Ansible | Vagrant | Python | Pygeoapi | Docker | Typescript | React | Redux",
          responsibilities: [
            "Provisioned and managed multiple VMs using Vagrant to replicate production environments, ensuring consistency and reliability.",
            "Configured database replication between primary and secondary VMs, enhancing data redundancy and system resilience.",
            "Automated VM configuration with Ansible, including SSL/TLS setup for secure communication across the domain controller VM.",
            "Refactored status reporting module to utilize the Observer pattern, improving code modularity and maintainability.",
            "Developed scalable UI components with OpenLayers, React, and Vite, optimizing performance and user experience.",
            "Migrated project from Create React App to Vite and Vitest, implemented comprehensive linting, and updated end-to-end Puppeteer tests to validate system requirements.",
          ],
        },
        {
          name: "Ocular",
          tech: "TypeScript | React | Redux-Saga | Docker | Postgres | Microservices",
          responsibilities: [
            "Developed a microservice with Prisma, PostgreSQL, and TypeScript to implement a new approach for cataloging mission data, enhancing data management efficiency.",
            "Optimized animation performance by leveraging CSS transforms and compositing, resulting in smoother visual transitions.",
            "Created a React component to handle asynchronous parsing of multiple files, improving data processing workflows.",
            "Resolved usability issues in Material-UI, enhancing the overall user experience and interface consistency.",
            "Designed scalable components and custom hooks to promote reusability and streamline development processes.",
            "Introduced component testing with Storybook, ensuring component quality and fostering collaborative development.",
          ],
        },
        {
          name: "DDS Viewer",
          tech: "TypeScript | React Query | React | WebSocket | DDS",
          responsibilities: [
            "Developed the frontend application from scratch using Vite and Vitest, creating a real-time data monitoring tool.",
            "Integrated WebSockets with DDS Data using the JSON-RPC standard, enabling efficient real-time communication.",
            "Utilized React Query to enhance application performance and modularity, optimizing data fetching and state management.",
            "Collaborated closely with the backend team to align on requirements and ensure seamless integration.",
          ],
        },
        {
          name: "JSON Viewer",
          tech: "NodeJS | TypeScript | React | JSON | WebSocket",
          responsibilities: [
            "Engineered a frontend application using React, Vite, and Vitest, featuring a tree view for JSON data with editing capabilities.",
            "Implemented custom configurations through URL query strings, providing flexible user interactions.",
            "Collaborated with stakeholders in an iterative process to ensure accurate implementation of requirements.",
            "Utilized TypeScript and Zod to validate inputs, enhancing data integrity and application reliability.",
          ],
        },
      ],
    },
    {
      title: "Software Engineering Team Lead",
      company: "Countable Web Productions",
      period: "March 2018 - April 2022",
      projects: [
        {
          name: "Cortico EMR Plug-In",
          tech: "Preact | Mobx | Vite | Jest | Docker | Manifest v3",
          responsibilities: [
            "Led the design and architecture of a Firefox/Chrome EMR plugin, enhancing messaging capabilities directly within the application.",
            "Mentored junior developers through support, pair programming, workshops, and QA sessions, fostering team growth and skill development.",
            "Implemented advanced automations to streamline repetitive tasks for MOAs and doctors, significantly improving workflow efficiency.",
            "Integrated deeply with EMR systems, enabling seamless email attachments of files directly from the EMR.",
            "Optimized bundle size by transitioning to Preact and vanilla implementations, and through advanced image optimizations.",
            "Played a key role in UI/UX design, focusing on user needs from MOAs and doctors, and facilitated sprint meetings to drive project progress.",
          ],
        },
        {
          name: "Cortico Website",
          tech: "Nuxt | Docker | Nginx | NodeJS | Strapi | Redux",
          responsibilities: [
            "Led SEO optimizations, achieving a 90% improvement in indexing and significantly enhancing search visibility.",
            "Architected the website from scratch using Nuxt for Server-Side Rendering (SSR), managed version updates, and reduced technical debt.",
            "Optimized conversion funnels and CTAs, resulting in a 50% increase in demo requests from leads.",
            "Enhanced website performance by optimizing assets, leading to faster load times and improved user experience.",
            "Played a key role in refining site design to effectively showcase the product and clearly communicate the company's value proposition.",
          ],
        },
        {
          name: "Rheumview",
          tech: "JavaScript | Flask | TailwindCSS | React",
          responsibilities: [
            "Initiated the project with a stack choice of React and Tailwind, ensuring compatibility with IE 11 under Citrix browser for legacy support.",
            "Developed modular code for scalable UI and dockerized the entire project for streamlined deployment and consistency across environments.",
          ],
        },
        {
          name: "Cortico",
          tech: "RiotJS | Webpack | Babel | PostCSS | Docker | Django",
          responsibilities: [
            "Rewrote the online booking system using Riot.js, transitioning from Vanilla JS to enhance maintainability and scalability.",
            "Implemented build systems with Babel and PostCSS, providing legacy browser support for a broader user base.",
            "Optimized network performance by concurrently spawning multiple requests, significantly improving load times.",
            "Enhanced stability by migrating to an opinionated frontend library, streamlining code maintenance.",
            "Developed a custom transpiler to facilitate Jest testing, ensuring robust test coverage.",
            "Dockerized the entire application process for consistent deployments and environment management.",
          ],
        },
      ],
    },
    {
      title: "Software Engineer",
      company: "Action Digital",
      period: "March 2019 - April 2019, Aug 2021 - Oct 2021",
      projects: [
        {
          name: "Oregon Student Aid & Joulecase",
          tech: "TypeScript | React | Azure | Redux | Redux Toolkit",
          responsibilities: [
            "Developed a voltage/watt calculator app for camping gear using Vue.js, providing a user-friendly tool for outdoor enthusiasts.",
            "Worked on the redesign of the Oregon Student Aid website using TypeScript and React, implementing Figma user interface designs for a modern, accessible experience.",
            "Coordinated with stakeholders to clarify project requirements, ensuring alignment between design and functionality.",
          ],
        },
      ],
    },
    {
      title: "Software Engineer",
      company: "Environment Canada",
      period: "May 2016 - Dec 2017",
      projects: [
        {
          name: "EC Alert Me",
          tech: "OpenLayers | PHP | Postgis",
          responsibilities: [
            "Improved the UI of EC Alert Me, a weather alert reporting system, to better deliver meaningful alerts to users.",
            "Implemented new features and resolved bugs, enhancing the app's functionality and user experience.",
            "Performed spatial queries using PostGIS to efficiently handle geospatial data within the application.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="min-h-screen">
        <Navigation colorScheme={colorScheme} onChange={setColorScheme} />
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
