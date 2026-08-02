import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { Link } from "react-router-dom";

import {
  FaHome,
  FaFolderOpen,
  FaCertificate,
  FaTrophy,
  FaUserGraduate,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaArrowUp,
  FaRobot,
  FaCode,
  FaFileAlt,
  FaGlobe,
  
} from "react-icons/fa";

export default function Dashboard() {

 const { user } = useContext(UserContext);

return (
    <GradientBackground>
      <div className="min-h-screen flex">

        {/* ================= Sidebar ================= */}

        <aside className="w-72 p-6">

          <GlassCard>

            <div className="p-6">

              <h1 className="text-3xl font-black text-white">
                Acadfolio AI
              </h1>

              <p className="mt-2 text-gray-400">
                AI Powered Academic Portfolio
              </p>

              <div className="mt-10 space-y-3">

                <MenuItem
                 icon={<FaHome />}
                  text="Dashboard"
                   to="/"
                 active
                />

                <MenuItem
                   icon={<FaUserGraduate />}
                    text="Profile"
                     to="/profile"
                />

                <MenuItem
                    icon={<FaCertificate />}
                     text="Certificates"
                     to="/certificates"
                      />

                         <MenuItem
                       icon={<FaFolderOpen />}
                        text="Projects"
                        to="/projects"
                         />

                      <MenuItem
                      icon={<FaTrophy />}
                      text="Achievements"
                         to="/achievements"
                            />

                <MenuItem
                  icon={<FaCog />}
                  text="Settings"
                />
                <MenuItem
  icon={<FaFileAlt />}
  text="Resume"
  to="/resume"
/>

<MenuItem
  icon={<FaGlobe />}
  text="Portfolio"
  to="/portfolio"
/>

              </div>

              <button
                className="mt-12 w-full rounded-xl border border-red-500/30 bg-red-500/20 py-3 text-red-300 transition hover:bg-red-500/30"
              >
                <FaSignOutAlt className="mr-2 inline" />
                Logout
              </button>

            </div>

          </GlassCard>

        </aside>

        {/* ================= Main ================= */}

        <main className="flex-1 p-8">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div>

              <p className="uppercase tracking-[4px] text-violet-400">
                Dashboard
              </p>

              <h1 className="mt-2 text-5xl font-black text-white">
               Good Evening, {user.name || "Student"}
              </h1>

              <p className="mt-3 text-gray-400">
                AI-powered Academic Portfolio Dashboard
              </p>

            </div>

            <div className="flex items-center gap-4">

              <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-violet-600">
                <FaSearch />
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-violet-600">
                <FaBell />
              </button>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-lg font-bold text-white">
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

            </div>

          </div>

          {/* Top Cards */}

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* Portfolio Health */}

            <GlassCard>

              <div className="p-8">

                <p className="font-semibold tracking-widest text-violet-300">
                  PORTFOLIO HEALTH
                </p>

                <h2 className="mt-4 text-7xl font-black text-white">
                  {Math.min(
  100,
  (user.certificates?.length || 0) * 10 +
  (user.projects?.length || 0) * 15 +
  (user.achievements?.length || 0) * 20
)}%
                </h2>

                <div className="mt-4 inline-flex rounded-full bg-green-500/20 px-4 py-2 text-green-300">
                  Placement Ready
                </div>

                <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">

                 <div
  className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
  style={{
    width: `${Math.min(
      100,
      (user.certificates?.length || 0) * 10 +
        (user.projects?.length || 0) * 15 +
        (user.achievements?.length || 0) * 20
    )}%`,
  }}
></div>
</div>

                <div className="mt-8 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-400">
                      Current Score
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                      {Math.min(
  100,
  (user.certificates?.length || 0) * 10 +
  (user.projects?.length || 0) * 15 +
  (user.achievements?.length || 0) * 20
)}
 / 100
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-violet-600 p-4 text-white">

                    <FaArrowUp className="text-2xl" />

                  </div>

                </div>

                <button className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500">

                  Improve Portfolio

                </button>

              </div>

            </GlassCard>

                        {/* ================= AI Assistant ================= */}

            <GlassCard>

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-violet-300 font-semibold tracking-widest">
                      AI ANALYSIS
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-white">
                      Portfolio Assistant
                    </h2>

                  </div>

                  <div className="rounded-2xl bg-cyan-500 p-4 text-slate-900">

                    <FaRobot className="text-2xl" />

                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

                    <p className="text-green-300 font-semibold">
                      ✅ Strong Java & React Skills
                    </p>

                  </div>

                  <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">

                    <p className="text-yellow-300 font-semibold">
                      ⚠ Internship certificate not found
                    </p>

                  </div>

                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">

                    <p className="text-cyan-300 font-semibold">
                      💡 Add GitHub & LinkedIn profile to improve portfolio score.
                    </p>

                  </div>

                </div>

                <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-bold text-slate-900 transition hover:bg-cyan-400">

                  Analyze My Portfolio

                </button>

              </div>

            </GlassCard>

          </div>

          {/* ================= Quick Actions ================= */}

          <div className="mt-8">

            <GlassCard>

              <div className="p-8">

                <h2 className="text-3xl font-black text-white">
                  ⚡ Quick Actions
                </h2>

                <p className="mt-2 text-gray-400">
                  Everything you need in one place.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                  <button className="rounded-2xl bg-violet-600 p-6 text-left text-white transition hover:scale-105">

                    <FaCertificate className="mb-4 text-3xl" />

                    <h3 className="font-bold text-lg">
                      Upload Certificate
                    </h3>

                    <p className="mt-2 text-sm text-violet-200">
                      Add verified certificates.
                    </p>

                  </button>

                  <button className="rounded-2xl bg-cyan-500 p-6 text-left text-slate-900 transition hover:scale-105">

                    <FaCode className="mb-4 text-3xl" />

                    <h3 className="font-bold text-lg">
                      Add Project
                    </h3>

                    <p className="mt-2 text-sm">
                      Showcase your best work.
                    </p>

                  </button>

                  <button className="rounded-2xl bg-pink-600 p-6 text-left text-white transition hover:scale-105">

                    <FaTrophy className="mb-4 text-3xl" />

                    <h3 className="font-bold text-lg">
                      Achievement
                    </h3>

                    <p className="mt-2 text-sm text-pink-200">
                      Add competitions & awards.
                    </p>

                  </button>

                  <button className="rounded-2xl bg-green-500 p-6 text-left text-slate-900 transition hover:scale-105">

                    <FaFileAlt className="mb-4 text-3xl" />

                    <h3 className="font-bold text-lg">
                      AI Resume
                    </h3>

                    <p className="mt-2 text-sm">
                      Generate ATS friendly resume.
                    </p>

                  </button>

                </div>

              </div>

            </GlassCard>

          </div>

                    {/* ================= Bottom Section ================= */}

          <div className="grid gap-6 mt-8 lg:grid-cols-2">

            {/* Portfolio Preview */}

            <GlassCard>

              <div className="p-8">

                <div className="flex items-center gap-5">

                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 flex items-center justify-center text-3xl font-black text-white">
                     {user.photo ? (
    <img
      src={user.photo}
      alt="Profile"
      className="h-full w-full object-cover"
    />
  ) : (
    user.name?.charAt(0).toUpperCase() || "?"
  )}

                  </div>

                  <div>

                    <h2 className="text-2xl font-black text-white">
  {user.name || "Student Name"}
</h2>

                   <p className="text-gray-400">
  {user.department || "Department"} • {user.college || "College"}
</p>
                    

                    <div className="mt-3 inline-flex rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
                      Portfolio Public
                    </div>

                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="flex justify-between text-gray-300">
                    <span>Certificates</span>
                    <span className="font-bold text-white">{user.certificates?.length || 0}</span>
                  </div>

                  <div className="flex justify-between text-gray-300">
                    <span>Projects</span>
                    <span className="font-bold text-white">{user.projects?.length || 0}</span>
                  </div>

                  <div className="flex justify-between text-gray-300">
                    <span>Achievements</span>
                    <span className="font-bold text-white">{user.achievements?.length || 0}</span>
                  </div>

                  <div className="flex justify-between text-gray-300">
                    <span>Portfolio Score</span>
                    <span className="font-bold text-green-400">
                      {Math.min(
                        100,
                        (user.certificates?.length || 0) * 10 +
                          (user.projects?.length || 0) * 15 +
                          (user.achievements?.length || 0) * 20
                      )}%
                    </span>
                  </div>

                </div>

                <button className="mt-8 w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500">
                  View Portfolio
                </button>

              </div>

            </GlassCard>

            {/* Latest Certificates */}

            <GlassCard>

              <div className="p-8">

                <h2 className="text-3xl font-black text-white">
                  📜 Latest Certificates
                </h2>
                <div className="mt-8 space-y-4">
  {(user.certificates || []).length === 0 ? (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-gray-400 text-center">
        No certificates added yet.
      </p>
    </div>
  ) : (
    user.certificates.slice(-3).reverse().map((certificate, index) => (
      <div
        key={index}
        className="rounded-2xl border border-white/10 bg-white/5 p-5"
      >
        <h3 className="font-bold text-white">
          {certificate.title}
        </h3>

        <p className="mt-2 text-gray-400">
          {certificate.company}
        </p>

        <span
          className={`mt-3 inline-block rounded-full px-3 py-1 text-sm text-white ${certificate.color}`}
        >
          {certificate.status}
        </span>
      </div>
    ))
  )}
</div>

              </div>

            </GlassCard>

          </div>

          {/* ================= Recent Activity ================= */}

          <div className="mt-8">

            <GlassCard>

              <div className="p-8">

                <h2 className="text-3xl font-black text-white">
                  📈 Recent Activity
                </h2>

                <div className="mt-8 space-y-4">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300">
                    ✅ Google AI Essentials certificate uploaded
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300">
                    💻 New portfolio project added
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300">
                    🤖 AI Resume generated successfully
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-300">
                    🚀 Portfolio score improved to 82%
                  </div>

                </div>

              </div>

            </GlassCard>

          </div>

        </main>

      </div>

    </GradientBackground>

  );
}

function MenuItem({ icon, text, active, to }) {
  return (
    <Link
      to={to}
      className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 transition ${
        active
          ? "bg-violet-600 text-white"
          : "text-gray-300 hover:bg-white/10"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}