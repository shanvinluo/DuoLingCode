import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import { useBoundStore } from "~/hooks/useBoundStore";
import { Calendar } from "./Calendar";
import { Flag } from "./Flag";
import {
  FireSvg,
  MoreOptionsSvg,
} from "./Svgs";

const EmptyFireTopBarSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="25" height="30" viewBox="0 0 25 30" fill="none" {...props}>
      <g opacity="0.2">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9697 2.91035C13.2187 1.96348 11.7813 1.96348 11.0303 2.91035L7.26148 7.66176L4.83362 6.36218C4.61346 6.24433 4.1221 6.09629 3.88966 6.05712C2.72329 5.86056 2.04098 6.78497 2.04447 8.03807L2.06814 16.5554C2.02313 16.9355 2 17.322 2 17.7137C2 23.2979 6.70101 27.8248 12.5 27.8248C18.299 27.8248 23 23.2979 23 17.7137C23 15.3518 22.1591 13.1791 20.7498 11.4581L13.9697 2.91035ZM11.7198 13.1888C12.0889 12.6861 12.8399 12.6861 13.209 13.1888L15.7324 16.6249C16.5171 17.4048 17 18.4679 17 19.6396C17 22.0329 14.9853 23.973 12.5 23.973C10.0147 23.973 8 22.0329 8 19.6396C8 18.6017 8.37893 17.649 9.01085 16.9029C9.0252 16.8668 9.04457 16.8315 9.06935 16.7978L11.7198 13.1888Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

const AddLanguageSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="36" height="29" viewBox="0 0 36 29" {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g stroke="#AFAFAF">
          <path
            d="M7.743 3c-1.67 0-2.315.125-2.98.48A3.071 3.071 0 0 0 3.48 4.763c-.355.665-.48 1.31-.48 2.98v13.514c0 1.67.125 2.315.48 2.98.297.555.728.986 1.283 1.283.665.355 1.31.48 2.98.48h20.514c1.67 0 2.315-.125 2.98-.48a3.071 3.071 0 0 0 1.283-1.283c.355-.665.48-1.31.48-2.98V7.743c0-1.67-.125-2.315-.48-2.98a3.071 3.071 0 0 0-1.283-1.283c-.665-.355-1.31-.48-2.98-.48H7.743z"
            strokeWidth="2"
          />
          <g strokeLinecap="round" strokeWidth="3">
            <path d="M18 10v9M13.5 14.5h9" />
          </g>
        </g>
      </g>
    </svg>
  );
};

type MenuState = "HIDDEN" | "LANGUAGES" | "STREAK" | "MORE";

export const TopBar = ({
  backgroundColor = "bg-gray-900", // LeetCode dark theme
  borderColor = "border-gray-700", // Subtle border
}: {
  backgroundColor?: `bg-${string}`;
  borderColor?: `border-${string}`;
}) => {
  const [menu, setMenu] = useState<MenuState>("HIDDEN");
  const [now, setNow] = useState(dayjs());
  const streak = useBoundStore((x) => x.streak);
  const language = useBoundStore((x) => x.language);
  return (
    <header className="fixed z-20 h-[58px] w-full">
      <div
        className={`relative flex h-full w-full items-center justify-between border-b-2 px-[10px] transition duration-500 sm:hidden ${borderColor} ${backgroundColor}`}
      >
        <button
          onClick={() =>
            setMenu((x) => (x === "LANGUAGES" ? "HIDDEN" : "LANGUAGES"))
          }
        >
          <Flag language={language} width={45} />
          <span className="sr-only">See languages</span>
        </button>

        <button
          className="flex items-center gap-2 font-bold text-orange-400" // LeetCode orange
          onClick={() => setMenu((x) => (x === "STREAK" ? "HIDDEN" : "STREAK"))}
          aria-label="Toggle streak menu"
        >
          {streak > 0 ? <FireSvg /> : <EmptyFireTopBarSvg />}{" "}
          <span
            className={
              streak > 0 ? "text-orange-400" : "text-gray-500 opacity-50"
            }
          >
            {streak}
          </span>
        </button>

        <MoreOptionsSvg
          onClick={() => setMenu((x) => (x === "MORE" ? "HIDDEN" : "MORE"))}
          role="button"
          tabIndex={0}
          aria-label="Toggle more menu"
          className="text-gray-400 hover:text-orange-400" // Subtle hover effect
        />

        <div
          className={[
            "absolute left-0 right-0 top-full bg-gray-800 text-gray-300 transition duration-300", // Dark dropdown
            menu === "HIDDEN" ? "opacity-0" : "opacity-100",
          ].join(" ")}
          aria-hidden={menu === "HIDDEN"}
        >
          {((): null | JSX.Element => {
            switch (menu) {
              case "LANGUAGES":
                return (
                  <div className="flex gap-5 p-5">
                    <div className="flex flex-col items-center justify-between gap-2">
                      <div className="rounded-2xl border-4 border-orange-400">
                        <Flag language={language} width={80} />
                      </div>
                      <span className="font-bold text-orange-400">
                        {language.name}
                      </span>
                    </div>
                    <Link
                      className="flex flex-col items-center justify-between gap-2"
                      href="/register"
                    >
                      <div className="rounded-2xl border-4 border-gray-700">
                        <AddLanguageSvg className="h-16 w-20 text-gray-400" />
                      </div>
                      <span className="font-bold text-gray-400">Courses</span>
                    </Link>
                  </div>
                );

              case "STREAK":
                return (
                  <div className="flex grow flex-col items-center gap-3 p-5">
                    <h2 className="text-xl font-bold text-orange-400">Streak</h2>
                    <p className="text-sm text-gray-400">
                      {`Practice each day so your streak won't reset!`}
                    </p>
                    <div className="self-stretch">
                      <Calendar now={now} setNow={setNow} />
                    </div>
                  </div>
                );

              case "MORE":
                return (
                  <div className="flex grow flex-col">
                    <Link
                      className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-700 hover:text-orange-400"
                      href="https://www.w3schools.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/logos/w3schools.svg"
                        alt="W3Schools"
                        width={40}
                        height={40}
                      />
                      W3Schools
                    </Link>

                    <Link
                      className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-700 hover:text-orange-400"
                      href="https://www.codecademy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/logos/codecademy.svg"
                        alt="Codecademy"
                        width={40}
                        height={40}
                      />
                      Codecademy
                    </Link>

                    <Link
                      className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-700 hover:text-orange-400"
                      href="https://www.freecodecamp.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/logos/freecodecamp.svg"
                        alt="freeCodeCamp"
                        width={40}
                        height={40}
                      />
                      freeCodeCamp
                    </Link>

                    <Link
                      className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-700 hover:text-orange-400"
                      href="https://www.udemy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/logos/udemy.svg"
                        alt="Udemy"
                        width={40}
                        height={40}
                      />
                      Udemy
                    </Link>
                  </div>
                );

              case "HIDDEN":
                return null;
            }
          })()}
          <div
            className={[
              "absolute left-0 top-full h-screen w-screen bg-black opacity-30",
              menu === "HIDDEN" ? "pointer-events-none" : "",
            ].join(" ")}
            onClick={() => setMenu("HIDDEN")}
            aria-label="Hide menu"
            role="button"
          ></div>
        </div>
      </div>
    </header>
  );
};