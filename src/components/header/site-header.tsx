import Link from "next/link";
import { NavigationMenuDemo } from "./navigation-menu";
import { HeaderSidebar } from "./sidebar";
import Searchbar from "./searchbar";
import { HeaderMenubar } from "./menubar";

const Header = () => {
  const cartitems = 0;
  return (
    <header className="flex justify-between items-center bg-[#fafafa] p-4 md:p-8 rounded-xl md:rounded-[32px]  mx-4 my-8 md:mx-[60px]">
      <nav className="md:w-full">
        <NavigationMenuDemo />
        <HeaderSidebar />
      </nav>
      <div className="md:w-full">
        <Link className="w-28" href="/">
          <img className="w-28" src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-2 md:gap-5 items-center">
        <div className="hidden md:block">
          <Searchbar />
        </div>
        <HeaderMenubar />
        <div className="bg-[#ffa52f] rounded-full w-8 h-8 flex items-center px-2 text-black font-bold">
          <p className="mx-auto">{cartitems}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
