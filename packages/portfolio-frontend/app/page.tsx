import Image from "next/image";
import client from "@/config/client";
import HalfNav from "@/components/HalfNav";
import About from "@/components/About";

export default async function Home() {
  const about = await client.fetch(`*[_type == "about"]`);
  console.log(about);
  return (
    <main className="bg-stone-950">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4 text-stone-400">
          <HalfNav />
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <About about={about} />
          </div>
        </div>
      </div>
    </main>
  );
}
