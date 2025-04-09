import Link from "next/link";

type BottomBarItem = {
  name: Tab;
  href: string;
  icon: JSX.Element;
};

export type Tab = "Learn" | "Leaderboards" | "Profile";

export const useBottomBarItems = () => {
  const bottomBarItems: BottomBarItem[] = [
    {
      name: "Learn",
      href: "/learn",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="h-[50px] w-[50px]">
          <path d="M24.5852 25.2658C24.2883 26.8243 22.9257 27.9519 21.3392 27.9519H10.6401C9.05354 27.9519 7.69094 26.8243 7.39408 25.2658L4.98096 12.5969L15.9001 4.52225L26.9988 12.5941L24.5852 25.2658Z" fill="#FFA116" />
          <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M13.1558 23.1111C13.1558 22.522 13.6333 22.0444 14.2224 22.0444H18.4891C19.0782 22.0444 19.5558 22.522 19.5558 23.1111C19.5558 23.7002 19.0782 24.1778 18.4891 24.1778H14.2224C13.6333 24.1778 13.1558 23.7002 13.1558 23.1111Z" fill="#282C34" />
          <path d="M19.4785 16.2998C19.4785 18.2208 17.9212 19.778 16.0002 19.778C14.0792 19.778 12.522 18.2208 12.522 16.2998C12.522 14.3788 14.0792 12.8215 16.0002 12.8215C17.9212 12.8215 19.4785 14.3788 19.4785 16.2998Z" fill="#282C34" />
          <path d="M16.1685 2.84462C16.6431 2.84231 17.1233 2.98589 17.5361 3.28558L29.9455 12.2319C30.9781 12.9822 31.207 14.4275 30.4568 15.4601C29.7067 16.4924 28.262 16.7215 27.2294 15.9719L16.1602 7.99185L5.09208 15.9712C4.05865 16.7213 2.61395 16.4923 1.86391 15.4599C1.11367 14.4273 1.34258 12.982 2.3752 12.2318L14.7839 3.28596C15.2022 2.98229 15.6887 2.83889 16.1685 2.84462Z" fill="#FFA116" />
        </svg>
      ),
    },
    

    {
      name: "Leaderboards",
      href: "/leaderboard",
      icon: (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
          <path d="M7 9.5C7 7.84314 8.34315 6.5 10 6.5H36C37.6569 6.5 39 7.84315 39 9.5V23.5C39 32.3366 31.8366 39.5 23 39.5C14.1634 39.5 7 32.3366 7 23.5V9.5Z" fill="#FFA116" />
          <path opacity="0.3" d="M39.0001 13.3455V9.5C39.0001 7.84315 37.657 6.5 36.0001 6.5H31.5706L8.30957 29.8497C9.68623 33.0304 12.0656 35.6759 15.0491 37.3877L39.0001 13.3455Z" fill="#282C34" />
        </svg>
      ),
    },
    {
      name: "Profile",
      href: "/profile",
      icon: (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
          {/* Larger Head */}
          <circle cx="23" cy="15" r="7" fill="#FFA116" />
          {/* Larger Body */}
          <path
            d="M12 36C12 29.9249 17.3726 25 23 25C28.6274 25 34 29.9249 34 36H12Z"
            fill="#FFA116"
          />
        </svg>
      ),
    }
    

  ];

  return bottomBarItems;
};

export const BottomBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const bottomBarItems = useBottomBarItems();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t-2 border-[#e5e5e5] bg-white md:hidden">
      <ul className="flex h-[88px]">
        {bottomBarItems.map((item) => (
          <li key={item.href} className="flex flex-1 items-center justify-center">
            <Link
              href={item.href}
              className={
                item.name === selectedTab
                  ? "rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] px-2 py-1"
                  : "px-2 py-1"
              }
            >
              {item.icon}
              <span className="sr-only">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};