import client from "@/config/client";
import Home from "@/components/Home";

export default async function HomePage() {
  const about = await client.fetch(`*[_type == "about"]`);
  const experiences = await client.fetch(
    `*[_type == "experience"]| order(startDate desc)`,
  );
  const skills = await client.fetch(`*[_type == "skill"]`);
  return (
    <main className="bg-stone-950">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <Home about={about} experiences={experiences} skills={skills} />
      </div>
    </main>
  );
}
