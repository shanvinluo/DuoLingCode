import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import type { Tab } from "./BottomBar";
import { useBottomBarItems } from "./BottomBar";
import type { LoginScreenState } from "./LoginScreen";
import { LoginScreen } from "./LoginScreen";

const LeftBarMoreMenuSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" {...props}>
      <circle
        cx="23"
        cy="23"
        r="19"
        fill="#F89F1B" // LeetCode orange
        stroke="#F89F1B"
        strokeWidth="2"
      />
      <circle cx="15" cy="23" r="2" fill="white" />
      <circle cx="23" cy="23" r="2" fill="white" />
      <circle cx="31" cy="23" r="2" fill="white" />
    </svg>
  );
};

export const LeftBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const [moreMenuShown, setMoreMenuShown] = useState(false);
  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  const bottomBarItems = useBottomBarItems();

  return (
    <>
      <nav className="fixed bottom-0 left-0 top-0 hidden flex-col gap-5 border-r-2 border-gray-700 bg-gray-900 p-3 md:flex lg:w-64 lg:p-5">
        <Link
          href="/learn"
          className="mb-5 ml-5 mt-5 hidden text-3xl font-bold text-orange-400 hover:text-orange-500 lg:block"
        >
          DuoLingCode
        </Link>
        <ul className="flex flex-col items-stretch gap-3">
          {bottomBarItems.map((item) => {
            return (
              <li key={item.href} className="flex flex-1">
                {item.name === selectedTab ? (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl border-2 border-orange-500 bg-orange-100 px-2 py-1 text-sm font-bold uppercase text-orange-600"
                  >
                    {item.icon}{" "}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl px-2 py-1 text-sm font-bold uppercase text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    {item.icon}{" "}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
          <div
            className="relative flex grow cursor-default items-center gap-3 rounded-xl px-2 py-1 font-bold uppercase text-gray-400 hover:bg-gray-800 hover:text-white"
            onClick={() => setMoreMenuShown((x) => !x)}
            onMouseEnter={() => setMoreMenuShown(true)}
            onMouseLeave={() => setMoreMenuShown(false)}
            role="button"
            tabIndex={0}
          >
            <LeftBarMoreMenuSvg />{" "}
            <span className="hidden text-sm lg:inline">More</span>
            <div
              className={[
                "absolute left-full top-[-10px] min-w-[300px] rounded-2xl border-2 border-gray-700 bg-gray-900 text-left text-gray-400",
                moreMenuShown ? "" : "hidden",
              ].join(" ")}
            >
              <div className="flex flex-col py-2">
                <Link
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-800 hover:text-white"
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
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-800 hover:text-white"
                  href="https://www.codecademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/logos/codeacademy.svg"
                    alt="Codecademy"
                    width={40}
                    height={40}
                  />
                  Codecademy
                </Link>

                <Link
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-800 hover:text-white"
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
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-800 hover:text-white"
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
              <div className="flex flex-col border-t-2 border-gray-700 py-2">
                <Link
                  className="px-5 py-2 text-left uppercase hover:bg-gray-800 hover:text-white"
                  href="/settings/account"
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
        </ul>
      </nav>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};