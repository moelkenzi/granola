import { Navlinks } from "@/constants/data";
import Link from "next/link";
import { GranolaLogo, Hamburger } from "../icons";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col items-end justify-center fixed top-0 inset-x-0 z-50 flex-none p-2 h-14 md:my-2 md:rounded-full  border-0 md:border-0.5 backdrop-blur-lg md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2 text-primary  md:shadow-sm md:bg-white/60">
        <div className="flex gap-2 justify-between items-center w-full md:gap-px">
          <Link href="/">
            <GranolaLogo />
          </Link>
          <ul className="flex">
            {Navlinks.map((link) => (
              <li key={link.link} className="flex">
                <Link
                  href={link.href}
                  className={`hidden select-none px-3 md:flex group items-center font-bold transition-all py-1.5 rounded-full border flex-none undefined hover:bg-black/5 border-transparent text-[rgb(106_108_106)] `}>
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center">
            <Button
              variant={"sm"}
              className={`text-[16px] hover:bg-[#80EE68] text-black bg-[#94f27f]`}>
              <Link href="/" className="font-bold">
                <span className="mr-1"></span>
                Download
              </Link>
            </Button>
            <button className="p-2 md:hidden transition-all">
              <Hamburger />
            </button>
          </div>
        </div>
        <p
          className={`absolute left-[25%] top-11 items-center justify-center mt-2 text-gray-400 text-sm hidden md:block`}>
          the navbar needs some enhancement
        </p>
      </nav>
    </>
  );
};
export default Navbar;
