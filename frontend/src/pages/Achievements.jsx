import { useContext, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import { UserContext } from "../Context/UserContext";

export default function Achievements() {
  const { user, setUser } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [year, setYear] = useState("");

  return (
    <GradientBackground>
      <div className="min-h-screen p-8">

        {/* Header */}
        <h1 className="text-5xl font-black text-white">
          Achievements 🏆
        </h1>

        <p className="mt-2 text-gray-400">
          Showcase your competitions, hackathons and awards.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <button
            onClick={() => setShowModal(true)}
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-500"
          >
            + Add Achievement
          </button>

          <input
            type="text"
            placeholder="Search Achievement..."
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400"
          />

        </div>

        {/* Achievement Cards */}
        <div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-3">

          {(user.achievements || []).length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-gray-400">
              No Achievements Added
            </div>
          ) : (
            user.achievements.map((item, index) => (
              <AchievementCard
                key={index}
                title={item.title}
                level={item.level}
                year={item.year}
                status="Completed"
                color="bg-green-500"
              />
            ))
          )}

        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60">

            <GlassCard>
              <div className="p-8 w-[400px]">

                <h2 className="text-2xl font-bold text-white">
                  Add Achievement
                </h2>

                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Achievement Name"
                  className="mt-5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
                />

                <input
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  placeholder="Level"
                  className="mt-4 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
                />

                <input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="Year"
                  className="mt-4 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
                />

                <div className="mt-6 flex gap-3">

                  <button
                    className="flex-1 rounded-xl bg-violet-600 py-3 text-white"
                    onClick={() => {
                      if (!title || !level || !year) {
                        alert("Please fill all fields");
                        return;
                      }

                      setUser({
                        ...user,

                        achievements: [
                          ...(user.achievements || []),
                          {
                            title,
                            level,
                            year,
                          },
                        ],

                        activity: [
                          `🏆 Achievement Added : ${title}`,
                          ...(user.activity || []),
                        ],
                      });

                      setTitle("");
                      setLevel("");
                      setYear("");
                      setShowModal(false);
                    }}
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 rounded-xl bg-red-500 py-3 text-white"
                  >
                    Cancel
                  </button>

                </div>

              </div>
            </GlassCard>

          </div>
        )}

      </div>
    </GradientBackground>
  );
}

function AchievementCard({
  title,
  level,
  year,
  status,
  color,
}) {
  return (
    <GlassCard>

      <div className="p-6">

        <div className="h-40 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 flex items-center justify-center text-6xl">
          🏆
        </div>

        <h2 className="mt-6 text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-2 text-gray-400">
          {level}
        </p>

        <p className="mt-1 text-gray-500">
          {year}
        </p>

        <span
          className={`inline-block mt-4 rounded-full ${color} px-4 py-2 text-white font-semibold`}
        >
          {status}
        </span>

        <button className="mt-6 w-full rounded-xl bg-violet-600 py-3 text-white hover:bg-violet-500">
          View Details
        </button>

      </div>

    </GlassCard>
  );
}