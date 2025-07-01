import { All, Blog, Press } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  return (
    <main className="flex-1 w-full lg:mx-auto">
      <section className="px-6 pt-40 mx-auto w-full max-w-2xl min-h-[80vh]">
        <h2 className="mb-8 text-6xl font-black tracking-tight text-primary">Blog</h2>
        <div className="flex gap-1 -mx-1">
          <Link
            href={"/"}
            className="flex gap-1 items-center py-1.5 pr-2.5 pl-2 rounded-full border ring-accent ring-offset-2">
            <div className="flex-none rounded-full text-accent-strong">
              <All />
            </div>
            <p className="text-sm font-bold">All</p>
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center py-1.5 pr-2.5 pl-2 rounded-full border bg-white border-neutral-200 hover:bg-neutral-50">
            <div className="flex-none rounded-full text-neutral-300">
              <Blog />
            </div>
            <p className="text-sm font-bold text-tertiary">Blog</p>
          </Link>
          <Link
            href={"/"}
            className="flex gap-1 items-center py-1.5 pr-2.5 pl-2 rounded-full border bg-white border-neutral-200 hover:bg-neutral-50">
            <div className="flex-none rounded-full text-neutral-300">
              <Press />
            </div>
            <p className="text-sm font-bold text-tertiary">Press</p>
          </Link>
        </div>
        <div className="relative mt-8 mb-24 -ml-1">
          <div className="hidden absolute inset-y-2 left-4 w-px bg-neutral-200 md:block"></div>
          <Link
            href={"/"}
            className="flex gap-2 px-4 pt-3 pb-4 -mx-4 mb-8 rounded-xl hover:bg-neutral-100 group">
            <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-neutral-100 hidden md:grid -mt-0.5">
              <Blog className="flex-none size-6 text-accent-strong" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className=" font-bold leading-tighter text-primary text-3xl">
                Granola 2.0: A second brain for your team
              </h2>
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center cursor-pointer">
                  <Image
                    alt="Chris Pedregal"
                    src="/images/image.png"
                    width={24}
                    height={24}
                    className="rounded-full size-6"
                  />
                  <p className="mt-0 mb-0 ml-2 font-bold">Chris Pedregal</p>
                </div>
                <p className="tabular-nums text-tertiary">May 14</p>
              </div>
            </div>
          </Link>
          <Link
            href={"/"}
            className="flex gap-2 px-4 pt-3 pb-4 -mx-4 mb-8 rounded-xl hover:bg-neutral-100 group">
            <div className="relative place-items-center p-1.5 h-10 bg-white group-hover:bg-neutral-100 hidden md:grid -mt-0.5">
              <Press className="flex-none size-6 text-sky-200" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className=" font-bold leading-tighter text-primary text-3xl">
                Granola 2.0: A second brain for your team
              </h2>
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center cursor-pointer">
                  <Image
                    alt="Chris Pedregal"
                    src="/images/image.png"
                    width={24}
                    height={24}
                    className="rounded-full size-6"
                  />
                  <p className="mt-0 mb-0 ml-2 font-bold">Chris Pedregal</p>
                </div>
                <p className="tabular-nums text-tertiary">May 14</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};
export default BlogPage;
