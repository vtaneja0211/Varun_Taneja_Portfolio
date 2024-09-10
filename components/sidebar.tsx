"use client";
import clsx from "clsx";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import me from "../app/headshot.png";
export const name = "Varun Taneja";
export const avatar = me;

import {
  ArrowIcon,
  GitHubIcon,
  Resume,
  LinkedIN,
  Email,
  PhoneIcon,
  USAFlagIcon,
  SingaporeFlagIcon
} from "./icons";


export default function Navbar() {
  return (
    <aside className=" flex flex-col max-w-[400px] pb-96 pr-5 md:flex-shrink-0 -mx-5 md:mx-0 font-mono border-r-2  border-green-600 justify-start items-center">
      <div className="flex flex-col items-center justify-center lg:top-20">
        <div>
          <Image
            alt={name}
            className="rounded-full border border-gray-500"
            src={avatar}
            placeholder="blur"
            width={200}
            style={{
              width: "auto",
              height: "auto",
            }}
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl py-3 text-neutral-800 dark:text-neutral-200 text-center">{name}</h1>
        </div>
      </div>

      <section id="bio" className="">
        <h2 className="text-center my-5 max-w-[700px] text-neutral-800 dark:text-neutral-200">
          Computer Engineering Student at the University of Notre Dame.
        </h2>
      </section>



      <section className="w-[200px] mt-8 md:mt-0 ml-0 grid grid-cols-4 place-items-center md:flex-row md:gap-2 transition-all justify-between items-center auto-cols-max">
        <a
          href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
            width="36"
            height="36"
            alt="C"
          />
        </a>

        <a
          href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg"
            width="36"
            height="36"
            alt="C++"
          />
        </a>

        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
            width="36"
            height="36"
            alt="Git"
          />
        </a>

        <a href="https://www.python.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
            width="36"
            height="36"
            alt="Python"
          />
        </a>

        <a
          href="https://www.oracle.com/java/"
          target="_blank"
          rel="noreferrer"
          className="pb-2"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
            width="45"
            height="45"
            alt="Java"
          />
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            width="36"
            height="36"
            alt="HTML5"
          />
        </a>

        <a
          href="https://www.w3.org/TR/CSS/#css"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
            width="36"
            height="36"
            alt="CSS3"
          />
        </a>

        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
            width="36"
            height="36"
            alt="TypeScript"
          />
        </a>

        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
          className="flex p-0.5 dark:rounded-full no-underline items-center text-neutral-800 dark:bg-neutral-100 "
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
            width="36"
            height="36"
            alt="NextJs"
          />
        </a>

        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className="pd-2"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
            width="36"
            height="36"
            alt="React"
          />
        </a>

        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
            width="36"
            height="36"
            alt="Bootstrap"
          />
        </a>

        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
            width="36"
            height="36"
            alt="TailwindCSS"
          />
        </a>

        <a href="https://www.php.net/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
            width="50"
            height="50"
            alt="PHP"
          />
        </a>

        <a
          href="https://firebase.google.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
            width="36"
            height="36"
            alt="Firebase"
          />
        </a>

        <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="36"
            height="36"
          >
            <path
              className="fill-[#252f3e] dark:fill-[#FFFFFF]"
              d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
            />
            <path
              className="fill-[#f90]"
              d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
            />
          </svg>
        </a>

        <a
          href="https://www.gnu.org/software/bash/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg"
            width="36"
            height="36"
            alt="Bash Shell"
          />
        </a>

        <a
          href="https://www.ibm.com/docs/en/zos/2.1.0?topic=introduction-assembler-language"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://svgshare.com/i/uRr.svg"
            width="36"
            height="36"
            alt="Assembly"
          />
        </a>

        <a href="https://www.verilog.com/" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/uU1.svg"
            width="36"
            height="36"
            alt="Verilog"
            className="dark:fill-[#c28c3a] fill-black"
          />
        </a>

        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
            width="36"
            height="36"
            alt="Figma"
          />
        </a>

        <a href="https://www.anaconda.com/" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1A2z.svg"
            width="36"
            height="36"
            alt="Anaconda"
          />
        </a>

        <a href="https://github.com/logisim-evolution/logisim-evolution" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1A2U.svg"
            width="36"
            height="36"
            alt="Logisim Evolution"
          />
        </a>

        <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1A1x.svg"
            width="36"
            height="36"
            alt="Pandas"
          />
        </a>

        <a href="https://pytorch.org/" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1A1w.svg"
            width="36"
            height="36"
            alt="PyTorch"
          />
        </a>

        <a href="https://cloud.google.com/" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1A3D.svg"
            width="36"
            height="36"
            alt="GCP"
          />
        </a>

        <a href="https://cloud.google.com/bigquery?utm_source=google&utm_medium=cpc&utm_campaign=na-US-all-en-dr-bkws-all-all-trial-e-dr-1707554&utm_content=text-ad-none-any-DEV_c-CRE_665665924750-ADGP_Hybrid+%7C+BKWS+-+MIX+%7C+Txt-Data+Analytics-BigQuery-KWID_43700077225652815-kwd-47616965283&utm_term=KW_bigquery-ST_bigquery&gad_source=1&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBL7qDIuGSo0kak1Sssj5qXnjNmWzLKbn6Mple8J0f9Z7Ym1s9kMKvMaAhI7EALw_wcB&gclsrc=aw.ds" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1A2c.svg"
            width="36"
            height="36"
            alt="BigQuery"
          />
        </a>

        <a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1A3t.svg"
            width="36"
            height="36"
            alt="Vertex AI"
          />
        </a>

        <a href="https://cloud.google.com/storage" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1A2q.svg"
            width="36"
            height="36"
            alt="Google Cloud Storage"
          />
        </a>

        <a href="https://www.cadence.com/en_US/home/tools/custom-ic-analog-rf-design/layout-design/virtuoso-layout-suite.html" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1A2r.svg"
            width="36"
            height="36"
            alt="Cadence Virtuoso"
          />
        </a>

        <a href="https://www.ollydbg.de/" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1AFK.svg"
            width="36"
            height="36"
            alt="OllyDbg"
          />
        </a>

        <a href="https://hex-rays.com/ida-pro/" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/1AH3.svg"
            width="36"
            height="36"
            alt="IDA Pro"
          />
        </a>

      </section>

      <section id="contact" className="min-h-screen max-w-[400px] ">
        <div className="hidden sm:block">
        </div>
        <br />
        <br />
        <h1 className="text-xl ">Contact Me</h1>
        <br />
        <hr />
        <div className="hidden sm:block">
          <br />
        </div>

        <div className="mt-3 flex flex-col">
          <div className="flex-1">
            <div className="flex flex-col gap-2 md:gap-2 max-w-[400px] h-full">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/varuntaneja7/"
                className="flex h-full w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
              >
                <div className="flex items-center">
                  <LinkedIN />
                  <div className="ml-3 text-sm">LinkedIn</div>
                </div>
                <ArrowIcon />
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="tel:+12694798385"
                className="flex h-full w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
              >
                <div className="flex items-center">
                  <USAFlagIcon />
                  <div className="ml-3 text-sm">USA Phone</div>
                </div>
                <ArrowIcon />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="tel:+6597572510"
                className="flex h-full w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
              >
                <div className="flex items-center">
                  <SingaporeFlagIcon />
                  <div className="ml-3 text-sm"> Singapore Phone</div>
                </div>
                <ArrowIcon />
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:varuntaneja0211@gmail.com"
                className="flex h-full w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                download
              >
                <div className="flex items-center">
                  <Email />
                  <div className="ml-3 text-sm">Email</div>
                </div>
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="flex-1 mt-8">
            <div className="dark:bg-neutral-100 bg-[#121212] overflow-hidden shadow-sm rounded-lg">
              <div className="py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-bold text-neutral-100 dark:text-[#121212]">
                  Contact Information
                </h3>
                <div className="mt-4">
                  <p className="text-base leading-6 text-neutral-100 dark:text-gray-500">
                    Reach out to me using the contact information below.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm leading-5 font-bold text-neutral-100 dark:text-gray-900">
                      Email:
                    </p>
                    <p className="mt-1 text-sm leading-5 text-neutral-100 dark:text-gray-500">
                      varuntaneja0211@gmail.com
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm leading-5 font-bold text-neutral-100 dark:text-gray-900">
                      Phone:
                    </p>
                    <p className="mt-1 text-sm leading-5 text-neutral-100 dark:text-gray-500">
                      USA: +1 (269) 479-8385 <br></br>
                      Singapore: +65 97572510
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </aside>

  );
}