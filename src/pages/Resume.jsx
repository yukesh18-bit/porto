import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";

export default function Resume() {
  const { user } = useContext(UserContext);

  return (
    <GradientBackground>
      <div className="min-h-screen p-8 max-w-5xl mx-auto">

        <GlassCard>
          <div className="p-10">

            <h1 className="text-5xl font-black text-white">
              AI Resume
            </h1>

            <p className="mt-2 text-gray-400">
              ATS Friendly Resume
            </p>

            <hr className="my-8 border-white/10" />

            {/* Personal */}
            <h2 className="text-2xl font-bold text-violet-300">
              Personal Information
            </h2>

            <div className="mt-4 space-y-2 text-white">
              <p><b>Name :</b> {user.name || "Not Added"}</p>
              <p><b>Email :</b> {user.email || "Not Added"}</p>
              <p><b>Phone :</b> {user.phone || "Not Added"}</p>
              <p><b>College :</b> {user.college || "Not Added"}</p>
              <p><b>Department :</b> {user.department || "Not Added"}</p>
            </div>

            {/* Skills */}
            <h2 className="mt-10 text-2xl font-bold text-violet-300">
              Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-violet-600 px-4 py-2 text-white">
                Java
              </span>

              <span className="rounded-full bg-cyan-500 px-4 py-2 text-black">
                React
              </span>

              <span className="rounded-full bg-pink-500 px-4 py-2 text-white">
                AI
              </span>

              <span className="rounded-full bg-green-500 px-4 py-2 text-white">
                MySQL
              </span>
            </div>

            {/* Certificates */}
            <h2 className="mt-10 text-2xl font-bold text-violet-300">
              Certificates
            </h2>

            <p className="mt-4 text-white">
              Total Certificates :
              <span className="font-bold text-green-400">
                {" "}
                {user.certificates?.length || 0}
              </span>
            </p>

            {/* Projects */}
            <h2 className="mt-10 text-2xl font-bold text-violet-300">
              Projects
            </h2>

            <p className="mt-4 text-white">
              Total Projects :
              <span className="font-bold text-green-400">
                {" "}
                {user.projects?.length || 0}
              </span>
            </p>

            {/* Achievements */}
            <h2 className="mt-10 text-2xl font-bold text-violet-300">
              Achievements
            </h2>

            <p className="mt-4 text-white">
              Total Achievements :
              <span className="font-bold text-green-400">
                {" "}
                {user.achievements?.length || 0}
              </span>
            </p>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">

              <button
                className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-500"
              >
                📄 Preview Resume
              </button>

              <button
                className="rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 hover:bg-cyan-400"
              >
                ⬇ Download Resume
              </button>

            </div>

          </div>
        </GlassCard>

      </div>
    </GradientBackground>
  );
}