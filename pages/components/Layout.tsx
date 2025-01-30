// this layout contains the header and footer

// system imports
import Image from "next/image";
import Router from "next/router";

// local imports
import headerIcon from "@/public/image-assets/icon-apeiron-icon.jpg";
import footerIcon from "@/public/image-assets/icon-footer.png";

// main layout
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#26282a]">
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

      {/* main content, flex-1 is to make sure the main content takes up the remaining space */}
      <main className="flex-1">{children}</main>

      {/* footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="flex flex-col justify-center items-center py-8">
          <Image src={footerIcon} alt="Apeiron Icon" className="w-auto h-[80px] sm:h-[100px]" priority />
          <p className="mt-4 text-gray-400 text-sm">Copyright © 2025 Foonie Magus Pte. Ltd</p>
        </div>
      </footer>
    </div>
  );
}
