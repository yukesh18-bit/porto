import GradientBackground from "../components/GradientBackground";
import GlassCard from "../components/GlassCard";
import { FaUser, FaLock, FaPalette, FaInfoCircle } from "react-icons/fa";

export default function Settings() {
  return (
    <GradientBackground>
      <div className="min-h-screen flex items-center justify-center px-6 py-10">
        <GlassCard>
          <div className="p-10 w-[750px] max-w-full">

            <h1 className="text-5xl font-black text-white">
              Settings
            </h1>

            <p className="mt-3 text-gray-400 text-lg">
              Manage your Acadfolio AI account settings.
            </p>

            {/* Account */}
            <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-violet-500 transition">
              <div className="flex items-center gap-4">
                <FaUser className="text-3xl text-violet-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Account
                  </h2>
                  <p className="text-gray-400">
                    Edit your profile and personal information.
                  </p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-cyan-400 transition">
              <div className="flex items-center gap-4">
                <FaLock className="text-3xl text-cyan-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Security
                  </h2>
                  <p className="text-gray-400">
                    Change password and secure your account.
                  </p>
                </div>
              </div>
            </div>

            {/* Appearance */}
            <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-pink-400 transition">
              <div className="flex items-center gap-4">
                <FaPalette className="text-3xl text-pink-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Appearance
                  </h2>
                  <p className="text-gray-400">
                    Theme customization (Coming Soon).
                  </p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-green-400 transition">
              <div className="flex items-center gap-4">
                <FaInfoCircle className="text-3xl text-green-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    About
                  </h2>
                  <p className="text-gray-400">
                    Acadfolio AI Version 1.0
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    AI Powered Academic Portfolio System
                  </p>
                </div>
              </div>
            </div>

          </div>
        </GlassCard>
      </div>
    </GradientBackground>
  );
}