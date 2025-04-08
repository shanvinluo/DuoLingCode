import type { NextPage } from "next";
import React from "react";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import {
  BronzeLeagueSvg,
  FirstPlaceSvg,
  LeaderboardExplanationSvg,
  LockedLeagueSvg,
  SecondPlaceSvg,
  ThirdPlaceSvg,
} from "~/components/Svgs";
import { useBoundStore } from "~/hooks/useBoundStore";

const LeaderboardProfile = ({
  place,
  name,
  xp,
  isCurrentUser,
}: {
  place: number;
  name: string;
  xp: number;
  isCurrentUser: boolean;
}) => {
  return (
    <div
      className={[
        "flex items-center gap-5 rounded-2xl px-5 py-2 hover:bg-gray-100 md:mx-0",
        isCurrentUser ? "bg-gray-200" : "",
      ].join(" ")}
    >
      <div className="flex items-center gap-4">
        {place === 1 ? (
          <FirstPlaceSvg />
        ) : place === 2 ? (
          <SecondPlaceSvg />
        ) : place === 3 ? (
          <ThirdPlaceSvg />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center font-bold text-green-700">
            {place}
          </div>
        )}
          <DefaultAvatar />

      </div>
      <div className="grow overflow-hidden overflow-ellipsis font-bold">
        {name}
      </div>
      <div className="shrink-0 text-gray-500">{`${xp} XP`}</div>
    </div>
  );
};
const LeaderboardExplanationSection = () => {
  return (
    <article className="relative hidden h-fit w-96 shrink-0 gap-5 rounded-2xl border-2 border-gray-200 p-6 pr-4 xl:flex">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold uppercase text-gray-400">
          What are leaderboards?
        </h2>
        <p className="font-bold text-gray-700">Do lessons. Earn XP. Compete.</p>
        <p className="text-gray-400">
          Earn XP through lessons, then compete with players in a weekly
          leaderboard
        </p>
      </div>
      <div className="w-10 shrink-0"></div>
    </article>
  );
};
  const DefaultAvatar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-12 h-12 text-gray-400 rounded-full bg-gray-100 p-1"
    >
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2h19.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  );
const Leaderboard: NextPage = () => {
  const leaderboardLeague = "Bronze League";
  const xpToday = useBoundStore((state) => state.xpToday());
  const leaderboardUsers = [
    { name: "Alice", xp: 540, isCurrentUser: false },
    { name: "Bob", xp: 460, isCurrentUser: false },
    { name: "Charlie", xp: 320, isCurrentUser: false },
    { name: "Dana", xp: 280, isCurrentUser: false },
    { name: "You", xp: xpToday, isCurrentUser: true },
  ].sort((a, b) => b.xp - a.xp);
  return (
    <div>
      <LeftBar selectedTab="Leaderboards" />
      <div className="flex justify-center gap-3 pt-14 md:ml-24 md:p-6 md:pt-10 lg:ml-64 lg:gap-12">
        <div className="flex w-full max-w-xl flex-col items-center gap-5 pb-28 md:px-5">
          <div className="sticky top-0 -mt-14 flex w-full flex-col items-center gap-5 bg-white pt-14">
            <div className="flex items-center gap-5">
              <BronzeLeagueSvg className="h-fit w-20" />
              <LockedLeagueSvg />
              <LockedLeagueSvg />
              <LockedLeagueSvg />
              <LockedLeagueSvg />
            </div>
            <h1 className="text-2xl font-bold">{leaderboardLeague}</h1>
            <div className="flex w-full flex-col items-center gap-1 pb-5">
              <p className="text-lg text-gray-500">
                Top 20 advance to the next league
              </p>
              <time className="font-bold text-yellow-400">3 days</time>
            </div>
            <div className="w-full border-b-2 border-gray-200"></div>
          </div>
          <div className="w-full">
            {leaderboardUsers.map((user, i) => (
              <LeaderboardProfile
                key={user.name}
                place={i + 1}
                name={user.name}
                xp={user.xp}
                isCurrentUser={user.isCurrentUser}
              />
            ))}
          </div>
        </div>
        <LeaderboardExplanationSection />
      </div>
      <BottomBar selectedTab="Leaderboards" />
    </div>
  );
};

export default Leaderboard;