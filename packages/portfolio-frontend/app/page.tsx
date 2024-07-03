import client from "@/config/client";
import Home from "@/components/Home";
import MouseTracker from "@/components/MouseTracker";

export default async function HomePage() {
  const about = await client.fetch(`*[_type == "about"]`);
  const experiences = await client.fetch(
    `*[_type == "experience"]| order(startDate desc)`,
  );
  const skills = await client.fetch(`*[_type == "skill"]`);
  const projects = await client.fetch(
    `*[_type == "project"]| order(_updatedAt desc)`,
  );
  return (
    <main className="bg-stone-950 bg-fixed">
      <div className="group/spotlight relative">
        <MouseTracker />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <Home
            about={about}
            experiences={experiences}
            skills={skills}
            projects={projects}
          />
        </div>
      </div>
    </main>
  );
}
