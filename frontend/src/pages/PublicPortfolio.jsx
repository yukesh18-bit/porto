import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";

export default function PublicPortfolio() {
  const { user } = useContext(UserContext);

  return (
    <GradientBackground>
      <div className="min-h-screen max-w-6xl mx-auto p-8">

        {/* Header */}
        <GlassCard>
          <div className="p-10 flex flex-col md:flex-row items-center gap-8">

            <div className="w-36 h-36 rounded-full overflow-hidden bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-5xl font-bold text-white">

              {user.photo ? (
                <img
                  src={user.photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                user.name?.charAt(0).toUpperCase()
              )}

            </div>

            <div>

              <h1 className="text-5xl font-black text-white">
                {user.name}
              </h1>

              <p className="mt-3 text-violet-300">
                {user.department}
              </p>

              <p className="text-gray-400">
                {user.college}
              </p>

              <p className="mt-5 text-gray-300">
                {user.bio}
              </p>

            </div>

          </div>
        </GlassCard>
        <GlassCard>
  <div className="mt-8 p-8">

    <h2 className="text-3xl font-bold text-white">
      📜 Certificates
    </h2>

    {(user.certificates || []).length === 0 ? (

      <p className="mt-6 text-gray-400">
        No Certificates Available
      </p>

    ) : (

      <div className="mt-6 space-y-4">

        {user.certificates.map((certificate, index) => (

          <div
            key={index}
            className="rounded-xl bg-white/5 border border-white/10 p-5"
          >

            <h3 className="text-xl font-bold text-white">
              {certificate.title}
            </h3>

            <p className="mt-2 text-gray-400">
              {certificate.company}
            </p>

          </div>

        ))}

      </div>

    )}

  </div>
</GlassCard>

<GlassCard>
  <div className="mt-8 p-8">

    <h2 className="text-3xl font-bold text-white">
      💻 Projects
    </h2>

    {(user.projects || []).length === 0 ? (

      <p className="mt-6 text-gray-400">
        No Projects Available
      </p>

    ) : (

      <div className="mt-6 space-y-5">

        {user.projects.map((project, index) => (

          <div
            key={index}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >

            <h3 className="text-xl font-bold text-white">
              {project.projectName}
            </h3>

            <p className="mt-2 text-gray-400">
              {project.techStack}
            </p>

            <p className="mt-3 text-gray-300">
              {project.description}
            </p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-cyan-400 hover:underline"
              >
                🔗 View GitHub Repository
              </a>
            )}

          </div>

        ))}

      </div>

    )}

  </div>
</GlassCard>

<GlassCard>
  <div className="mt-8 p-8">

    <h2 className="text-3xl font-bold text-white">
      🏆 Achievements
    </h2>

    {(user.achievements || []).length === 0 ? (

      <p className="mt-6 text-gray-400">
        No Achievements Available
      </p>

    ) : (

      <div className="mt-6 space-y-4">

        {user.achievements.map((achievement, index) => (

          <div
            key={index}
            className="rounded-xl border border-white/10 bg-white/5 p-5"
          >

            <h3 className="text-xl font-bold text-white">
              {achievement.title}
            </h3>

            <p className="mt-2 text-gray-400">
              {achievement.description}
            </p>

          </div>

        ))}

      </div>

    )}

  </div>
</GlassCard>
<GlassCard>
  <div className="mt-8 p-8">

    <h2 className="text-3xl font-bold text-white">
      📄 Resume
    </h2>

    <p className="mt-3 text-gray-400">
      Recruiters can preview or download the latest resume.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">

      <button
        onClick={() => window.open("/resume", "_blank")}
        className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-500"
      >
        👁 Preview Resume
      </button>

      <button
        onClick={() => window.open("/resume", "_blank")}
        className="rounded-xl bg-green-500 px-6 py-3 text-white hover:bg-green-400"
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