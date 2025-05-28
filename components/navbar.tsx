"use client";
import clsx from "clsx";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  const handleHomeClick = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
    handleSetActive("home");
  };

  return (
    <div className="justify-end md:flex font-mono">
      <nav className="pl-60 fixed top-5 md:flex md:items-center md:space-x-10 bg-black">
        {Object.entries(navItems).map(([path, { name }]) => {
          if (path === "home") {
            return (
              <button
                key={path}
                onClick={handleHomeClick}
                className={clsx(
                  "transition-all hover:text-green-600 dark:hover:text-green-600 flex align-middle bg-transparent border-none outline-none cursor-pointer",
                  {
                    "text-neutral-500": !(active === path),
                    "font-regular": active === path,
                    active: active == path,
                  }
                )}
                style={{ position: "relative" }}
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
              </button>
            );
          }
          return (
            <Link
              to={path}
              key={path}
              offset={0}
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