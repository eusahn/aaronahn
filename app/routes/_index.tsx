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
      <div className="font-sans p-20">
        <h1 className="text-3xl font-heading">Aaron Ahn</h1>
        <div className="font-body mt-2 text-gray-700">
          <p className="">Full Stack Engineer</p>
          <p className="">Kongsberg Geospatial | April 2022 - Present</p>

          <p className="italic mt-2">Ocular</p>
          <p className="italic text-xs">TypeScript | React | Redux-Saga | Docker | Postgres | Microservices</p>
          <ul>
            <li></li>
          </ul>

          <p className="italic mt-2">212CD CDSS</p>
          <p className="italic text-xs">Ansible | Vagrant | Python | Pygeoapi | Docker | Typescript | React | Redux</p>
          <ul>
            <li></li>
          </ul>

          <p className="italic mt-2">DDS Viewer</p>
          <p className="italic text-xs">TypeScript | React Query | React | Websockets | DDS</p>
          <ul>
            <li></li>
          </ul>

          <p className="italic mt-2">JSON Viewer</p>
          <p className="italic text-xs">NodeJS | TypeScript | React | JSON | Websockets</p>
          <ul>
            <li></li>
          </ul>
        </div>
        <hr className="my-4" />
        <div className="font-body text-gray-700">
          <p className="">Full Stack Engineer</p>
          <p className="">Countable Web Productions | March 2018 - April 2022</p>

          <p className="italic mt-2">Ocular</p>
          <p className="italic text-xs">TypeScript | React | Redux-Saga | Docker | Postgres | Microservices</p>
          <ul>
            <li></li>
          </ul>

          <p className="italic mt-2">212CD CDSS</p>
          <p className="italic text-xs">Ansible | Vagrant | Python | Pygeoapi | Docker | Typescript | React | Redux</p>
          <ul>
            <li></li>
          </ul>

          <p className="italic mt-2">DDS Viewer</p>
          <p className="italic text-xs">TypeScript | React Query | React | Websockets | DDS</p>
          <ul>
            <li></li>
          </ul>

          <p className="italic mt-2">JSON Viewer</p>
          <p className="italic text-xs">NodeJS | TypeScript | React | JSON | Websockets</p>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
