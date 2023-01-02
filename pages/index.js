import { Transition } from "@headlessui/react";
import {
  ArrowRightIcon,
  ChevronUpIcon,
  LinkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon } from "@heroicons/react/24/solid";
import { Fragment, useEffect, useState } from "react";
import Line from "../components/Line";
import Navbar from "../components/Navbar";

export default function Home() {
  const [showToTop, setShowToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setShowToTop(true);
      if (window.scrollY === 0) setShowToTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-5 md:px-10 relative dark:bg-slate-900">
      <div className="min-h-[500px]" id="home">
        <Navbar />

        <div className="max-w-3xl mx-auto py-16 text-center md:text-start">
          <span className="uppercase font-extrabold text-sm tracking-widest text-green-500 mb-4 block">
            Muhammad Pauzi
          </span>

          <Line className="mx-auto md:mx-0" />

          <div className="mx-auto md:mx-0 w-[600px] max-w-full mb-14">
            <h1 className="dark:text-slate-200 leading-snug md:leading-[1.2] text-3xl md:text-5xl font-extrabold font-slab mb-5 block text-slate-900">
              Choose me to make a great website for you.
            </h1>

            <p className="font-slab dark:text-slate-300 text-slate-700 text-lg">
              I am a full stack web developer who can make a great website to
              help make your work easier.
            </p>
          </div>

          {/* <h1 className="text-5xl font-extrabold font-slab mb-12 block text-white">
            As a Full Stack Web Developer
          </h1> */}

          <div className="flex gap-2 flex-col items-stretch justify-center md:items-center md:flex-row md:justify-start">
            <a
              href="#contact-me"
              className="justify-center py-4 px-5 inline-flex items-center font-semibold text-base rounded-md text-white bg-[#4630FF] transition hover:bg-[#3727c8]"
            >
              <PhoneIcon className="w-5 h-5 mr-2 inline-block " />
              Contact Me
            </a>
            <a
              href="#my-works"
              className="justify-center py-4 px-6 inline-flex items-center font-semibold text-base font-slab rounded-md  transition-colors text-slate-600 hover:text-[#4630FF] dark:text-white"
            >
              My Works
              <ArrowRightIcon className="w-4 h-4 ml-3 inline-block" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto pt-10" id="about-me">
        <div className="mx-auto md:mx-0 w-[600px] max-w-full mb-14">
          <span className="uppercase font-extrabold text-sm tracking-widest text-green-500 mb-4 block">
            About Me
          </span>

          <Line />

          <h1 className="leading-snug md:leading-[1.2] text-3xl md:text-4xl font-extrabold font-slab mb-5 block text-slate-900 dark:text-slate-200">
            <img
              src="https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430"
              className="inline-block md:-ml-[3.6rem] mr-2"
              width="50"
            />{" "}
            Hey! Let me introduce myself.
            <a href="#about-me">
              <LinkIcon className="ml-2 w-5 h-5 inline-block text-slate-700 font-light" />
            </a>
          </h1>

          <div className="font-slab text-slate-700 text-lg space-y-5 leading-[1.8] dark:text-slate-300">
            <p>
              Hello, My name{"'"}s{" "}
              <span className="text-[#4630FF] dark:text-white underline underline-offset-2">
                Muhammad Pauzi
              </span>{" "}
              and i am a Full-stack Web Developer. I was born and live in{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/323/323372.png"
                width="20"
                className="my-0 mx-2 p-0 inline-block"
              />
              <span className="text-[#4630FF] dark:text-white underline underline-offset-2">
                Langkat, North Sumatera, Indonesia
              </span>{" "}
              I{"'"}ve been studying programming since 16 years old. I already
              understand several programming languages, frameworks and more that
              have been implemented in some of my projects which can be seen in
              the below this section.
            </p>

            <p>
              I really like this field (Full-stack Web Developer), because i
              like programming, coding and learning something new technologies
              and making a project, especially web-based.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-5" id="my-skills">
        <div className="mx-auto md:mx-0 w-[600px] max-w-full mb-14">
          <span className="uppercase font-extrabold text-sm tracking-widest text-green-500 mb-4 block">
            My Skills
          </span>

          <Line />

          <h1 className="leading-snug md:leading-[1.2] text-3xl md:text-4xl font-extrabold font-slab mb-5 block text-slate-900 dark:text-slate-200">
            <div className="inline-block md:-ml-[3.6rem] mr-2">🫠</div>
            Tech Stacks
            <a href="#my-skills">
              <LinkIcon className="ml-2 w-5 h-5 inline-block text-slate-700 font-light" />
            </a>
          </h1>

          <div className="font-slab text-slate-700 text-lg space-y-5 leading-[1.8] dark:text-slate-300">
            <h4>
              <b>💻 Programming Languages</b>
            </h4>

            <p className="flex items-center gap-1 flex-wrap">
              <img
                alt="JavaScript"
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
              />
              <img
                alt="PHP"
                src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
              />
              <img
                alt="TypeScript"
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              />
              <img
                alt="Python"
                src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"
              />
            </p>

            <h4>
              <b>📚 Web Stacks</b>
            </h4>

            <p className="flex items-center gap-1 flex-wrap">
              <img
                alt="HTML5"
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              />
              <img
                alt="Bootstrap CSS"
                src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              />
              <img
                alt="Tailwind CSS"
                src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
              />
              <img
                alt="JSON"
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
              />
              <img
                alt="React JS"
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              />
              <img
                alt="Svelte JS"
                src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white"
              />
              <img
                alt="SASS"
                src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
              />
              <img
                alt="Vite JS"
                src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"
              />
              <img
                alt="Alphine JS"
                src="https://img.shields.io/badge/AlpineJS-8BC0D0?style=for-the-badge&logo=alpine.js&logoColor=black"
              />
              <img
                alt="Next JS"
                src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
              />
              <img
                alt="JQuery"
                src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"
              />
              <img
                alt="Yarn"
                src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"
              />
              <br />
              <img
                alt="Laravel"
                src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"
              />
              <img
                alt="Livewire"
                src="https://img.shields.io/badge/livewire-4e56a6?style=for-the-badge&logo=livewire&logoColor=white"
              />
              <img
                alt="CodeIgniter"
                src="https://img.shields.io/badge/Codeigniter-EF4223?style=for-the-badge&logo=codeigniter&logoColor=white"
              />
              <img
                alt="Composer"
                src="https://img.shields.io/badge/Composer-885630?style=for-the-badge&logo=Composer&logoColor=white"
              />
              <img
                alt="Express JS"
                src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
              />
              <img
                alt="Node JS"
                src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
              />
              <img
                alt="Flask"
                src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
              />
            </p>

            <h4>
              <b>💿 Databases</b>
            </h4>

            <p className="flex items-center gap-1 flex-wrap">
              <img
                alt="MYSQL"
                src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
              />
              <img
                alt="MongoDB"
                src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
              />
              <img
                alt="SQLite"
                src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"
              />
              <img
                alt="MariaDB"
                src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
              />
            </p>

            <h4>
              <b>🏷️ Others / Tools</b>
            </h4>

            <p className="flex items-center gap-1 flex-wrap">
              <img
                alt="GIT"
                src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
              />
              <img
                alt="GitHub"
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
              />
              <img
                alt="Linux"
                src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
              />
              <img
                alt="Ubuntu"
                src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"
              />
              <img
                alt="VSCode"
                src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
              />
              <img
                alt="GitLab"
                src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white"
              />
            </p>

            <h4>
              <b>🖊️ Designs</b>
            </h4>

            <p className="flex items-center gap-1 flex-wrap">
              <img
                alt="Adobe Ilustrator"
                src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white"
              />
              <img
                alt="Adobe XD"
                src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6"
              />
              <img
                alt="Adobe Photoshop"
                src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black"
              />
              <img
                alt="Figma"
                src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
              />
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto pt-10" id="contact-me">
        <div className="mx-auto md:mx-0 w-[600px] max-w-full mb-14">
          <span className="uppercase font-extrabold text-sm tracking-widest text-green-500 mb-4 block">
            Contact Me
          </span>

          <hr className="w-12 my-6 rounded-lg h-[3px] bg-slate-200 border-none block" />

          <h1 className="leading-snug md:leading-[1.2] text-3xl md:text-4xl font-extrabold font-slab mb-5 block text-slate-900 dark:text-slate-200">
            <span className="inline-block md:-ml-[3.6rem] mr-2">📞</span>
            Here you can find me
            <a href="#contact-me">
              <LinkIcon className="ml-2 w-5 h-5 inline-block text-slate-700 font-light" />
            </a>
          </h1>

          <div className="font-slab text-lg">
            <ul className="sm:ml-4 space-y-2 text-gray-500 dark:text-slate-300 sm:list-disc">
              <li>
                Email :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4630FF] dark:text-white underline underline-offset-2 decoration-2 decoration-[#4630FF] dark:decoration-white"
                  href="mailto:muhammadpauzi200@gmail.com"
                >
                  muhammadpauzi200@gmail.com
                </a>
              </li>
              <li>
                Telegram :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4630FF] dark:text-white underline underline-offset-2 decoration-2 decoration-[#4630FF] dark:decoration-white"
                  href="https://t.me/mhdpauzi"
                >
                  @mhdpauzi
                </a>
              </li>
              <li>
                WhatsApp :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4630FF] dark:text-white underline underline-offset-2 decoration-2 decoration-[#4630FF] dark:decoration-white"
                  href="https://wa.me/6282165688820"
                >
                  Muhammad Pauzi
                </a>
              </li>
              <li>
                GitHub :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4630FF] dark:text-white underline underline-offset-2 decoration-2 decoration-[#4630FF] dark:decoration-white"
                  href="https://github.com/muhammadpauzi"
                >
                  @muhammadpauzi
                </a>
              </li>
              <li>
                LinkedIn :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4630FF] dark:text-white underline underline-offset-2 decoration-2 decoration-[#4630FF] dark:decoration-white"
                  href="http://www.linkedin.com/in/muhammad-pauzi-756a1021b"
                >
                  Muhammad Pauzi
                </a>
              </li>
              <li>
                Instagram :{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4630FF] dark:text-white underline underline-offset-2 decoration-2 decoration-[#4630FF] dark:decoration-white"
                  href="https://www.instagram.com/mhdpauzi_"
                >
                  @mhdpauzi_
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        show={showToTop}
        enter="transform duration-200 transition ease-in-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <a
          href="#home"
          className="h-[50px] w-[50px] grid place-content-center backdrop-blur-md bg-[#b3adf050] fixed hover:shadow-xl transition hover:shadow-[#4530ff29] dark:hover:shadow-none bottom-5 right-5 rounded-full md:bottom-10 md:right-36"
        >
          <ChevronUpIcon
            className="w-5 h-5 text-[#4630FF] dark:text-white"
            strokeWidth={3}
          />
        </a>
      </Transition>

      <div className="max-w-3xl mx-auto -mb-4">
        <div className="bg-white border border-gray-100 mt-28 dark:bg-transparent dark:border-slate-800">
          <div className="py-10 px-3 text-center">
            <small className="block text-md font-bold uppercase text-[#4630FF] dark:text-white mb-4 tracking-widest">
              Thank You For Visiting My Portofolio
            </small>
            <p className="text-gray-500 font-slab dark:text-slate-300">
              Develop & Designed With{" "}
              <HeartIcon className="inline-block mx-1 text-red-600 w-6 h-6" />{" "}
              By{" "}
              <a
                href=""
                className="text-[#4630FF] dark:text-white underline underline-offset-2"
              >
                Muhammad Pauzi.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
