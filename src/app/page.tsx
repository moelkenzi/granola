import { WindowIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <div className="overflow-visible absolute inset-0 select-none z-[-1] opacity-60 rotate-180 bg-[radial-gradient(at_53%_78%,rgba(255,255,0,0.3)_0px,transparent_50%),radial-gradient(at_71%_91%,rgba(51,255,0,0.3)_0px,transparent_50%),radial-gradient(at_31%_91%,rgba(255,128,0,0.17)_0px,transparent_50%)]"></div> */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black">Granola Black (900)</h1>
          <h2 className="text-3xl font-bold">Granola Bold (700)</h2>
          <h3 className="text-2xl font-normal">Granola Regular (400)</h3>
          <p className="text-xl italic">Granola Italic (400)</p>

          <div className="mt-8">
            <Button variant={"sm"}>
              <WindowIcon /> Download
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
