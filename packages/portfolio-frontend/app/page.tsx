import Image from "next/image";
import client from "@/config/client";
import HalfNav from "@/components/HalfNav";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default async function Home() {
  const about = await client.fetch(`*[_type == "about"]`);
  const experiences = await client.fetch(
    `*[_type == "experience"]| order(startDate desc)`,
  );
  const skills = await client.fetch(`*[_type == "skill"]`);
  return (
    <main className="bg-stone-950">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4 text-stone-400">
          <HalfNav />
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <About about={about} />
            <Experience experiences={experiences} skills={skills} />
          </div>
        </div>
      </div>
    </main>
  );
}
