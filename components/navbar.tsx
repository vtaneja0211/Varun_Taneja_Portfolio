"use client";

import clsx from "clsx";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
  home: {
    name: "Home",
  },
  about: {
    name: "About Me",
  },
  projects: {
    name: "Projects",
  },
  work_experience: {
    name: "Work Experience",
  },
};

export default function Navbar() {
  const [active, setActive] = useState("home");

  const handleSetActive = (id: any) => {
    setActive(id);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 100) {
        currentSection = section.getAttribute("id") ?? "";
      }
    });

    setActive(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="justify-end md:flex font-mono">
      
    <nav className="pl-60 fixed top-5 md:flex md:items-center md:space-x-10 bg-black">
      {Object.entries(navItems).map(([path, { name }]) => {
        return (
          <Link
            to={path}
            key={path}
            offset={path === "home" ? -500 : 0}
            onClick={() => {
              handleSetActive(path);
            }}
            className={clsx(
              "transition-all hover:text-green-600 dark:hover:text-green-600 flex align-middle",
              {
                "text-neutral-500": !(active === path),
                  "font-regular": active === path,
                  active: active == path,
              }
            )}
          >
            {name}
            {active === path ? (
              <motion.div
                className="absolute inset-0 rounded-md z-[-1]"
                layoutId="sidebar"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            ) : null}
          </Link>
        );
      })}
    </nav>
  </div>





  );
}