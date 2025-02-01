// this is the component that renders the sticky header

// system imports
import Image from "next/image";
import Router from "next/router";

// local imports
import headerIcon from "@public/image-assets/icon-apeiron-icon.jpg";

export default function Header() {
  return (
    <>
      {/* making a sticky header */}
      <header className="sticky top-0 z-50 h-16 bg-gray-800 border-b-4 border-[#b39f85]">
        {/* nav bar */}
        <nav className="relative h-full">
          <div className="absolute inset-0">
            {/* background slope */}
            <div className="left-0 top-0 h-full w-80 bg-[#e5e6e6] skew-x-[20deg] translate-x-[-10%]" />
            {/* icon which is a link to the home page */}
            <Image
              src={headerIcon}
              alt="Apeiron Icon"
              className="absolute top-0 h-full w-auto z-10 ml-8 cursor-pointer"
              onClick={() => Router.push("/")}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
