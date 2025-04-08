import Link from "next/link";
import { LanguageDropDown } from "./LanguageDropDown";

export const LanguageHeader = () => {
  return (
    <header className="fixed left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-gray-900 px-8 font-bold text-white shadow-md">
      <Link className="text-2xl text-orange-400 hover:text-orange-500" href="/">
        DuoLingCode
      </Link>
      <LanguageDropDown />
    </header>
  );
};