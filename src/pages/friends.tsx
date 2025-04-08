import type { NextPage } from "next";
import Link from "next/link";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useBoundStore } from "~/hooks/useBoundStore";

const Friends: NextPage = () => {
  const username = useBoundStore((x) => x.username);

  return (
    <div>
      <LeftBar selectedTab={null} />
      <div className="flex justify-center gap-3 pt-14 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex w-full max-w-2xl flex-col gap-5 p-5 pb-28">
          <h1 className="text-2xl font-bold">Add Friends</h1>
          <p className="text-gray-600">
            Invite your friends to join you and compete together!
          </p>

          <div className="mt-6">
            <h2 className="mb-2 text-lg font-bold">Your Invite Link</h2>
            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-4 text-sm">
              <code>{`https://yourapp.com/invite?ref=${username}`}</code>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="mb-2 text-lg font-bold">Search for friends (coming soon)</h2>
            <input
              type="text"
              placeholder="Search by username..."
              className="w-full rounded-xl border-2 border-gray-200 p-3 text-gray-700"
              disabled
            />
            <p className="mt-2 text-sm text-gray-400">Friend search will be available soon.</p>
          </div>

          <div className="mt-10">
            <Link
              href="/profile"
              className="inline-block rounded-xl border-b-4 border-blue-500 bg-blue-400 px-6 py-3 font-bold uppercase text-white hover:brightness-110"
            >
              Back to Profile
            </Link>
          </div>
        </div>
      </div>
      <BottomBar selectedTab={null} />
    </div>
  );
};

export default Friends;
