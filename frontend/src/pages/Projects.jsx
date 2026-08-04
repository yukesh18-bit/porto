
import { useContext, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import { UserContext } from "../Context/UserContext";

export default function Projects() {
const context = useContext(UserContext);

console.log("Context:", context);

const { user, setUser } = context || {};
  const [showModal, setShowModal] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [techStack, setTechStack] = useState("");
  const [description, setDescription] = useState("");
const [github, setGithub] = useState("");
  return (
    <GradientBackground>
      <div className="min-h-screen p-8">

        <h1 className="text-5xl font-black text-white">
          Projects 💻
        </h1>

        <p className="mt-2 text-gray-400">
          Showcase your best academic and personal projects.
        </p>

        {/* Header */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-between">

          <button
  onClick={() => setShowModal(true)}
  className="rounded-xl bg-violet-600 px-6 py-3 text-white font-semibold hover:bg-violet-500"
>
  + Add Project
</button>

          <input
            type="text"
            placeholder="Search Project..."
            className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400"
          />

        </div>

        {/* Projects Grid */}

        <div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-3">

          {(user?.projects || []).map((project, index) => (
  <ProjectCard
    key={index}
    title={project.title}
    tech={project.tech}
    status={project.status}
    color={project.color}
  />
))}

        </div>

      </div>
      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/60">

    <GlassCard>
      <div className="w-[450px] p-8">

        <h2 className="text-2xl font-bold text-white">
          Add New Project
        </h2>

        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
        />

        <input
          type="text"
          placeholder="Tech Stack"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
        />
        <textarea
  placeholder="Project Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
></textarea>
          <input
  type="text"
  placeholder="GitHub Repository Link"
  value={github}
  onChange={(e) => setGithub(e.target.value)}
  className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
/>

        <div className="mt-6 flex gap-3">

          <button
            onClick={() => setShowModal(false)}
            className="flex-1 rounded-xl bg-red-500 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (!projectName || !techStack) {
                alert("Please fill all fields");
                return;
              }

              setUser({
                ...user,
                projects: [
                  ...(user?.projects || []),
                  {
                    title: projectName,
                    tech: techStack,
                    status: "Completed",
                    color: "bg-green-500",
                  },
                ],
                activity: [
                  `💻 Project Added : ${projectName}`,
                  ...(user?.activity || []),
                ],
              });

              setProjectName("");
              setTechStack("");
              setShowModal(false);
            }}
            className="flex-1 rounded-xl bg-violet-600 py-3 text-white"
          >
            Save
          </button>

        </div>

      </div>
    </GlassCard>

  </div>
)}
    </GradientBackground>
  );
}

function ProjectCard({ title, tech, status, color }) {
  return (
    <GlassCard>

      <div className="p-6">

        <div className="h-40 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center text-6xl">
          💻
        </div>

        <h2 className="mt-6 text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-2 text-gray-400">
          {tech}
        </p>

        <span
          className={`inline-block mt-4 rounded-full ${color} px-4 py-2 text-white`}
        >
          {status}
        </span>

        <div className="mt-6 flex gap-3">

          <button className="flex-1 rounded-xl bg-violet-600 py-3 text-white hover:bg-violet-500">
            View
          </button>


          <button className="flex-1 rounded-xl bg-cyan-500 py-3 text-slate-900 hover:bg-cyan-400">
            GitHub
          </button>

        </div>

      </div>

    </GlassCard>
  );
}