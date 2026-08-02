import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Portfolio() {
  const { user } = useContext(UserContext);

  return (
    <GradientBackground>
      <div className="min-h-screen p-8 max-w-6xl mx-auto">

        {/* Hero Section */}
        <GlassCard>
          <div className="p-10 text-center">

            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center text-5xl font-black text-white">
              {user.photo ? (
  <img
    src={user.photo}
    alt="Profile"
    className="h-full w-full rounded-full object-cover"
  />
) : (
  user.name?.charAt(0).toUpperCase() || "?"
)}
            </div>

            <h1 className="mt-6 text-5xl font-black text-white">
              {user.name || "Student Name"}
            </h1>

            <p className="mt-3 text-xl text-violet-300">
                 {user.department || "Department"}
            </p>

            <p className="mt-2 text-gray-400">
              {user.college || "College Name"}
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-500">
                Download Resume
              </button>

              <button className="rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 hover:bg-cyan-400">
                Contact
              </button>
            </div>

          </div>
        </GlassCard>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <GlassCard>
            <div className="p-6 text-center">
             <h2 className="text-4xl font-black text-white">
  {user.certificates?.length || 0}
</h2>
              <p className="text-gray-400 mt-2">Certificates</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-6 text-center">
             <h2 className="text-4xl font-black text-white">
  {user.projects?.length || 0}
</h2>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-6 text-center"> 
            <h2 className="text-4xl font-black text-white">
  {user.achievements?.length || 0}
</h2>
              <p className="text-gray-400 mt-2">Achievements</p>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="p-6 text-center">
            <h2 className="text-4xl font-black text-green-400">
  {Math.min(
    100,
    (user.certificates?.length || 0) * 10 +
      (user.projects?.length || 0) * 15 +
      (user.achievements?.length || 0) * 20
  )}
%
</h2>
              <p className="text-gray-400 mt-2">Portfolio Score</p>
            </div>
          </GlassCard>

        </div>

        {/* About */}
        <GlassCard>
          <div className="p-8 mt-8">

            <h2 className="text-3xl font-bold text-white">
              About Me
            </h2>

            <p className="mt-4 text-gray-300 leading-8">
             {user.about || "No description added yet."}
            </p>

          </div>
        </GlassCard>

        {/* Skills */}
        <GlassCard>
          <div className="p-8 mt-8">

            <h2 className="text-3xl font-bold text-white">
              Skills
            </h2>

            <div className="flex flex-wrap gap-4 mt-6">

              <span className="rounded-full bg-violet-600 px-5 py-2 text-white">
                Java
              </span>

              <span className="rounded-full bg-cyan-500 px-5 py-2 text-slate-900">
                React
              </span>

              <span className="rounded-full bg-pink-500 px-5 py-2 text-white">
                AI
              </span>

              <span className="rounded-full bg-green-500 px-5 py-2 text-white">
                MySQL
              </span>

              <span className="rounded-full bg-yellow-500 px-5 py-2 text-black">
                Tailwind CSS
              </span>

            </div>

          </div>
        </GlassCard>

      </div>
    </GradientBackground>
  );
}