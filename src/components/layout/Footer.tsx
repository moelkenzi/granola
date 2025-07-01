import { FooterLink1, FooterLink2, FooterLink3 } from "@/constants/data";
import Link from "next/link";
import { Apple, ArrowRight, GranolaSingleLogo, IPhone, Linkedin, X } from "../icons";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="px-6 lg:pt-8 pb-4 flex flex-col gap-8 w-full tracking-[0.01em] text-secondary mt-auto bg-neutral-50">
      <section className="flex overflow-visible relative flex-col items-center py-16 w-full sm:px-6 md:py-24 lg:py-20 lg:px-8 lg:max-w-6xl gap-8 justify-center px-0 mx-auto max-w-7xl text-center lg:gap-8">
        <div className="flex flex-col col-span-full gap-4 mx-auto max-w-2xl text-center lg:gap-8">
          <h2 className="text-3xl lg:text-5xl font-black tracking-[-0.015em] leading-[0.95] text-balance text-brand">
            Ready for calmer, more productive meetings?
          </h2>
          <p className="text-xl font-bold lg:text-2xl text-brand-secondary">
            Try Granola for a few meetings today. It&apos;s free to get started.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex flex-col">
            <Button
              variant={"lg"}
              className="gap-2 rounded-full focus:ring-2 focus:ring-gren focus:ring-offset-2 lg:text-xl shadow-inner group relative overflow-hidden duration-75 z-20 px-6 h-12 lg:h-14 cursor-pointer lg:pl-5 pr-6 text-[#454745] font-bold">
              <Apple />
              <span className="bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgba(255,255,255,0.1)] ">
                Download for Mac
              </span>
            </Button>
          </div>
          <div className="flex flex-col">
            <Button
              variant={"secondary"}
              className="rounded-full font-bold lg:text-xl shadow-sm px-6 h-12 lg:h-14 cursor-pointer lg:pl-7 lg:pr-4 border-0.5 to-transparent text-colored">
              <IPhone className="text-black" />
              <span className="text-[#003720] ">Download for iPhone</span>
              <ArrowRight className=" size-7 text-[#454745]" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-8 pt-12 mx-auto w-full max-w-7xl text-left border-t md:grid-cols-5 text-secondary lg:mt-12">
          <div className="flex flex-col gap-[50px] items-start col-span-2 justify-center">
            <GranolaSingleLogo />
            <p className="text-tertiary">
              © Granola inc 2025
              <br />
              Made with ♥︎ in Shoreditch
            </p>
          </div>
          <div className="flex flex-col items-start col-span-1 text-[#454745]">
            <ul className="flex flex-col gap-1">
              {FooterLink1.map((link) => (
                <li key={link.link}>
                  <Link
                    href={link.href}
                    className="py-1 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0">
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1 items-start col-span-1 text-[#454745]">
            <ul className="flex flex-col gap-1">
              {FooterLink2.map((link) => (
                <li key={link.link}>
                  <Link
                    href={link.href}
                    className="py-1 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0">
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1 items-start col-span-1 text-[#454745]">
            <ul className="flex flex-col gap-1">
              {FooterLink3.map((link) => (
                <li key={link.link}>
                  <Link
                    href={link.href}
                    className="py-1 underline transition-all decoration-transparent hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0">
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 items-center -ml-0.5 mt-2">
              <Link
                href="/#"
                className="py-1 underline transition-all hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0">
                <Linkedin />
              </Link>
              <Link
                href="/#"
                className="py-1 underline transition-all hover:decoration-tertiary underline-offset-2 hover:underline-offset-4 md:py-0">
                <X />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
