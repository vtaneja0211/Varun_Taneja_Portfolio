"use client";
import clsx from "clsx";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = {
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
  const [active, setActive] = useState("about");

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
    <div className="w-full flex justify-end font-mono">
      <nav className="fixed top-0 left-0 right-0 px-4 py-3 bg-black/80 backdrop-blur-sm z-50 flex flex-wrap justify-center md:justify-end md:items-center md:space-x-10">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            to={path}
            key={path}
            offset={0}
            onClick={() => {
              handleSetActive(path);
            }}
            className={clsx(
              "transition-all hover:text-green-600 dark:hover:text-green-600 flex align-middle px-2 py-1",
              {
                "text-neutral-500": !(active === path),
                "text-green-600": active === path,
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
        ))}
      </nav>
    </div>
  );
}