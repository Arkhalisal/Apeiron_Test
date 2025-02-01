// this is the component that renders the footer

// system imports
import Image from "next/image";

// local imports
import footerIcon from "@public/image-assets/icon-footer.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="flex flex-col justify-center items-center py-8">
        <Image src={footerIcon} alt="Apeiron Icon" className="w-auto h-[80px] sm:h-[100px]" priority />
        <p className="mt-4 text-gray-400 text-sm">Copyright © 2025 Foonie Magus Pte. Ltd</p>
      </div>
    </footer>
  );
}
