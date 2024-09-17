import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="font-sans py-4 px-4 dark:text-white">
        <h1 className="text-xl font-heading">Professional Experience</h1>
        <div className="font-body mt-2 text-gray-700 dark:text-white">
          <p className="text-inherit">Full Stack Engineer</p>
          <p className="text-inherit">Kongsberg Geospatial | April 2022 - Present</p>

          <p className="italic mt-2">212CD CDSS</p>
          <p className="italic text-xs">
            Ansible | Vagrant | Python | Pygeoapi | Docker | Typescript | React
            | Redux
          </p>
          <ol className="text-xs my-2">
            <li>
              Provisioned and managed multiple VMs using Vagrant to replicate
              production environments, ensuring consistency and reliability.
            </li>
            <li>
              Configured database replication between primary and secondary VMs,
              enhancing data redundancy and system resilience.
            </li>
            <li>
              Automated VM configuration with Ansible, including SSL/TLS setup
              for secure communication across the domain controller VM.
            </li>
            <li>
              Refactored status reporting module to utilize the Observer
              pattern, improving code modularity and maintainability.
            </li>
            <li>
              Developed scalable UI components with OpenLayers, React, and Vite,
              optimizing performance and user experience.
            </li>
            <li>
              Migrated project from Create React App to Vite and Vitest,
              implemented comprehensive linting, and updated end-to-end
              Puppeteer tests to validate system requirements.
            </li>
          </ol>

          <p className="italic mt-2 dark:text-white">Ocular</p>
          <p className="italic text-xs">
            TypeScript | React | Redux-Saga | Docker | Postgres | Microservices
          </p>
          <ul className="text-xs my-2">
            <li>
              Developed a microservice with Prisma, PostgreSQL, and TypeScript
              to implement a new approach for cataloging mission data, enhancing
              data management efficiency.
            </li>
            <li>
              Optimized animation performance by leveraging CSS transforms and
              compositing, resulting in smoother visual transitions.
            </li>
            <li>
              Created a React component to handle asynchronous parsing of
              multiple files, improving data processing workflows.
            </li>
            <li>
              Resolved usability issues in Material-UI, enhancing the overall
              user experience and interface consistency.
            </li>
            <li>
              Designed scalable components and custom hooks to promote
              reusability and streamline development processes.
            </li>
            <li>
              Introduced component testing with Storybook, ensuring component
              quality and fostering collaborative development.
            </li>
          </ul>

          <p className="italic mt-2">DDS Viewer</p>
          <p className="italic text-xs">
            TypeScript | React Query | React | WebSocket | DDS
          </p>
          <ul className="text-xs my-2">
            <li>
              Developed the frontend application from scratch using Vite and
              Vitest, creating a real-time data monitoring tool.
            </li>
            <li>
              Integrated WebSockets with DDS Data using the JSON-RPC standard,
              enabling efficient real-time communication.
            </li>
            <li>
              Utilized React Query to enhance application performance and
              modularity, optimizing data fetching and state management.
            </li>
            <li>
              Collaborated closely with the backend team to align on
              requirements and ensure seamless integration.
            </li>
          </ul>

          <p className="italic mt-2">JSON Viewer</p>
          <p className="italic text-xs">
            NodeJS | TypeScript | React | JSON | WebSocket
          </p>
          <ul className="text-xs my-2">
            <li>
              Engineered a frontend application using React, Vite, and Vitest,
              featuring a tree view for JSON data with editing capabilities.
            </li>
            <li>
              Implemented custom configurations through URL query strings,
              providing flexible user interactions.
            </li>
            <li>
              Collaborated with stakeholders in an iterative process to ensure
              accurate implementation of requirements.
            </li>
            <li>
              Utilized TypeScript and Zod to validate inputs, enhancing data
              integrity and application reliability.
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="font-body text-gray-700 dark:text-white">
          <p className="">Full Stack Engineer</p>
          <p className="">
            Countable Web Productions | March 2018 - April 2022
          </p>

          <p className="italic mt-2">Cortico EMR Plug-In</p>
          <p className="italic text-xs">
            Preact | Mobx | Vite | Jest | Docker | Manifest v3
          </p>
          <ul className="text-xs my-2">
            <li>
              Led the design and architecture of a Firefox/Chrome EMR plugin,
              enhancing messaging capabilities directly within the application.
            </li>
            <li>
              Mentored junior developers through support, pair programming,
              workshops, and QA sessions, fostering team growth and skill
              development.
            </li>
            <li>
              Implemented advanced automations to streamline repetitive tasks
              for MOAs and doctors, significantly improving workflow efficiency.
            </li>
            <li>
              Integrated deeply with EMR systems, enabling seamless email
              attachments of files directly from the EMR.
            </li>
            <li>
              Optimized bundle size by transitioning to Preact and vanilla
              implementations, and through advanced image optimizations.
            </li>
            <li>
              Played a key role in UI/UX design, focusing on user needs from
              MOAs and doctors, and facilitated sprint meetings to drive project
              progress.
            </li>
          </ul>

          <p className="italic mt-2">Cortico Website</p>
          <p className="italic text-xs">
            Nuxt | Docker | Nginx | NodeJS | Strapi | Redux
          </p>
          <ul className="text-xs my-2">
            <li>
              Led SEO optimizations, achieving a 90% improvement in indexing and
              significantly enhancing search visibility.
            </li>
            <li>
              Architected the website from scratch using Nuxt for Server-Side
              Rendering (SSR), managed version updates, and reduced technical
              debt.
            </li>
            <li>
              Optimized conversion funnels and CTAs, resulting in a 50% increase
              in demo requests from leads.
            </li>
            <li>
              Enhanced website performance by optimizing assets, leading to
              faster load times and improved user experience.
            </li>
            <li>
              Played a key role in refining site design to effectively showcase
              the product and clearly communicate the company’s value
              proposition.
            </li>
          </ul>

          <p className="italic mt-2">Rheumview</p>
          <p className="italic text-xs">
            JavaScript | Flask | TailwindCSS | React
          </p>
          <ul className="text-xs my-2">
            <li>
              Initiated the project with a stack choice of React and Tailwind,
              ensuring compatibility with IE 11 under Citrix browser for legacy
              support.
            </li>
            <li>
              Developed modular code for scalable UI and dockerized the entire
              project for streamlined deployment and consistency across
              environments.
            </li>
          </ul>

          <p className="italic mt-2">Cortico</p>
          <p className="italic text-xs">
            RiotJS | Webpack | Babel | PostCSS | Docker | Django
          </p>
          <ul className="text-xs my-2">
            <li>
              Rewrote the online booking system using Riot.js, transitioning
              from Vanilla JS to enhance maintainability and scalability.
            </li>
            <li>
              Implemented build systems with Babel and PostCSS, providing legacy
              browser support for a broader user base.
            </li>
            <li>
              Optimized network performance by concurrently spawning multiple
              requests, significantly improving load times.
            </li>
            <li>
              Enhanced stability by migrating to an opinionated frontend
              library, streamlining code maintenance.
            </li>
            <li>
              Developed a custom transpiler to facilitate Jest testing, ensuring
              robust test coverage.
            </li>
            <li>
              Dockerized the entire application process for consistent
              deployments and environment management.
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="font-body text-gray-700 dark:text-white">
          <p className="">Full Stack Engineer</p>
          <p className="">
            Action Digital | March 2019 - April 2019, Aug 2021 - Oct 2021
          </p>
          <p className="italic mt-2">Oregon Student Aid & Joulecase</p>
          <p className="italic text-xs">
            TypeScript | React | Azure | Redux | Redux Toolkit
          </p>
          <ul className="text-xs my-2">
            <li>
              Developed a voltage/watt calculator app for camping gear using
              Vue.js, providing a user-friendly tool for outdoor enthusiasts.
            </li>
            <li>
              Worked on the redesign of the Oregon Student Aid website using
              TypeScript and React, implementing Figma user interface designs
              for a modern, accessible experience.
            </li>
            <li>
              Coordinated with stakeholders to clarify project requirements,
              ensuring alignment between design and functionality.
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="font-body text-gray-700 dark:text-white">
          <p className="">Web developer</p>
          <p className="">Environment Canada | May 2016 - Dec 2017</p>
          <p className="italic mt-2">EC Alert Me</p>
          <p className="italic text-xs">OpenLayers | PHP | Postgis</p>
          <ul className="text-xs my-2">
            <li>
              Improved the UI of EC Alert Me, a weather alert reporting system,
              to better deliver meaningful alerts to users.
            </li>
            <li>
              Implemented new features and resolved bugs, enhancing the app’s
              functionality and user experience.
            </li>
            <li>
              Performed spatial queries using PostGIS to efficiently handle
              geospatial data within the application.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
